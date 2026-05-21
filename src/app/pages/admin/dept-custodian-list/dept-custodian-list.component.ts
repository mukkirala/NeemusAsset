import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from '../../../core/Constant/apiConstant';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { 
  GridModule, 
  GridComponent,
  EditService, 
  ToolbarService, 
  CommandColumnService, 
  PageService, 
  SortService, 
  FilterService,
  EditSettingsModel,
  CommandModel,
  PageSettingsModel,
  FilterSettingsModel,
  ExcelExportService,
  PdfExportService,
  RowDDService,
  GroupService,
  ColumnChooserService,
  ResizeService,
  ReorderService,
  SearchService
} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-dept-custodian-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    GridModule,
    ButtonModule
  ],
  providers: [
    EditService,
    ToolbarService,
    CommandColumnService,
    PageService,
    SortService,
    FilterService,
    ExcelExportService,
    PdfExportService,
    RowDDService,
    GroupService,
    ColumnChooserService,
    ResizeService,
    ReorderService,
    SearchService
  ],
  templateUrl: './dept-custodian-list.component.html',
  styleUrls: ['./dept-custodian-list.component.css']
})
export class DeptCustodianListComponent implements OnInit {
  @ViewChild('grid') public grid!: GridComponent;
  selectedDept: string = '';
  
  public departments: any[] = [];
  public allCustodians: any[] = [];
  public filteredData: any[] = [];
  
  private apiUrl = BASE_URL;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  public editSettings: EditSettingsModel = { 
    allowAdding: true,
    allowEditing: true, 
    allowDeleting: true, 
    mode: 'Dialog',
    showDeleteConfirmDialog: true
  };
  
  public pageSettings: PageSettingsModel = { pageSize: 10, pageSizes: true };
  public toolbar: string[] = ['Add', 'Search', 'ExcelExport', 'PdfExport', 'ColumnChooser'];
  public filterSettings: FilterSettingsModel = { type: 'Excel' };
  public groupSettings: any = { showGroupedColumn: true };
  
  public commands: CommandModel[] = [
    { type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
    { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
    { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
    { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }
  ];

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getDepartments();
    this.getCustodians();
  }

  getDepartments() {
    this.http.get<any>(`${this.apiUrl}/DepartmentDetails`, { headers: this.headers })
      .subscribe({
        next: (res) => {
          console.log('Departments API Response:', res);
          // Handle various response formats
          if (Array.isArray(res)) {
            this.departments = res;
          } else if (res && Array.isArray(res.result)) {
            this.departments = res.result;
          } else if (res && Array.isArray(res.data)) {
            this.departments = res.data;
          } else if (res && res.$values && Array.isArray(res.$values)) {
            this.departments = res.$values;
          }
          
          if (!this.departments || this.departments.length === 0) {
            console.warn('Departments API returned empty or unrecognized format');
          }
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error fetching departments:', err);
          alert('Error fetching departments. Please check the backend API.');
        }
      });
  }

  getCustodians() {
    this.http.get<any>(`${this.apiUrl}/CustodianDetails`, { headers: this.headers })
      .subscribe({
        next: (res) => {
          console.log('Custodians API Response:', res);
          let data = [];
          if (Array.isArray(res)) {
            data = res;
          } else if (res && Array.isArray(res.result)) {
            data = res.result;
          } else if (res && Array.isArray(res.data)) {
            data = res.data;
          } else if (res && res.$values && Array.isArray(res.$values)) {
            data = res.$values;
          }

          this.allCustodians = data.map((item: any) => ({
            ...item,
            CustodianID: item.CustodianID || item.custodianID || item.id || item.CustodianId,
            CustodianName: item.CustodianName || item.custodianName || item.name || item.FullName,
            CustodianDepartmentCode: item.CustodianDepartmentCode || item.departmentCode || item.DepartmentCode || item.deptCode,
            Designation: item.Designation || item.designation,
            CustodianStatus: item.CustodianStatus || item.custodianStatus || item.status || 'Active'
          }));
          this.filteredData = [...this.allCustodians];
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error fetching custodians:', err);
          alert('Error fetching custodians. Please check the backend API.');
        }
      });
  }

  onSearch() {
    console.log('Searching for department:', this.selectedDept);
    if (this.selectedDept) {
      this.filteredData = this.allCustodians.filter((c: any) => {
        const deptCode = c.CustodianDepartmentCode || c.departmentCode || c.DepartmentCode || c.deptCode;
        // Use loose equality and handle potential string/number mismatch or case sensitivity
        return String(deptCode).trim().toLowerCase() === String(this.selectedDept).trim().toLowerCase();
      });
    } else {
      this.filteredData = this.allCustodians;
    }
    console.log('Filtered data count:', this.filteredData.length);
  }

  actionComplete(args: any): void {
    if (args.requestType === 'save') {
      if (args.action === 'add') {
        this.insertCustodian(args.data);
      } else if (args.action === 'edit') {
        this.updateCustodian(args.data);
      }
    } else if (args.requestType === 'delete') {
      this.deleteCustodian(args.data[0]);
    }
  }

  insertCustodian(data: any) {
    this.http.post(`${this.apiUrl}/InsertCustodian`, data, { headers: this.headers })
      .subscribe({
        next: (res) => {
          alert('Custodian Inserted Successfully');
          this.getCustodians();
        },
        error: (err) => {
          console.error('Insert Failed:', err);
          alert('Insert Failed');
        }
      });
  }

  updateCustodian(data: any) {
    this.http.put(`${this.apiUrl}/UpdateCustodian/${data.CustodianID}`, data, { headers: this.headers })
      .subscribe({
        next: (res) => {
          alert('Updated Successfully');
          this.getCustodians();
        },
        error: (err) => {
          console.error('Update Failed:', err);
          alert('Update Failed');
        }
      });
  }

  deleteCustodian(data: any) {
    this.http.delete(`${this.apiUrl}/DeleteCustodian/${data.CustodianID}`, { headers: this.headers })
      .subscribe({
        next: (res) => {
          alert('Deleted Successfully');
          this.getCustodians();
        },
        error: (err) => {
          console.error('Delete Failed:', err);
          alert('Delete Failed');
        }
      });
  }

  addRecord() {
    if (this.grid) {
      this.grid.addRecord();
    }
  }

  toolbarClick(args: any): void {
    if (args.item.id.includes('excelexport')) {
      this.grid.excelExport();
    } else if (args.item.id.includes('pdfexport')) {
      this.grid.pdfExport();
    }
  }
}

