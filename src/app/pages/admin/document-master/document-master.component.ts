import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  ReorderService
} from '@syncfusion/ej2-angular-grids';
import { Router } from '@angular/router';
const URL = BASE_URL;
const headers = new HttpHeaders();

@Component({
  selector: 'app-document-master',
  standalone: true,
  imports: [CommonModule, GridModule, ButtonModule],
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
    ReorderService
  ],
  templateUrl: './document-master.component.html',
  styleUrls: ['./document-master.component.css']
})
export class DocumentMasterComponent implements OnInit {
  @ViewChild('grid') public grid!: GridComponent;
    private apiUrl = BASE_URL;
  private headers = new HttpHeaders();
   public editSettings: EditSettingsModel = { 
    allowAdding: true,
    allowEditing: true, 
    allowDeleting: true, 
    mode: 'Dialog',
    showDeleteConfirmDialog: true
  };
    
    public documents: any[]=[];
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

  public namerules = { required: true };
  public coderules = { required: true };
  constructor(private router: Router,private http: HttpClient) {

  }
  ngOnInit(): void {
    this.GetDocuments();
  }
  GetDocuments() {
     this.http.get<any[]>(URL + '/DocumentDetails', { headers })
      .subscribe({
        next: (res) => {
          console.log(res);
          this.documents = res;
          if (this.grid) {
          this.grid.refresh();
        }
        },
        error: (err) => {
          console.log(err);
        }
      });
  }
 saveDocument(data: any) {
  this.http.post( URL + '/InsertDocumentDetails', data, { headers }
    ).subscribe({
    next: (res) => {
      console.log(res);
      alert('Inserted Successfully');
      this.GetDocuments();
    },
    error: (err) => {
      console.log(err);
      alert('Insert Failed');
    }
  });
}
updateDocument(data: any) {
  this.http.put( URL + '/UpdateDocumentDetails',data,{ headers }
  ).subscribe({
    next: (res) => {
      console.log(res);
      alert('Updated Successfully');
      this.GetDocuments();
    },
    error: (err) => {
      console.log(err);
      alert('Update Failed');
    }
  });
}

deleteDocument(data: any) {
  this.http.delete(URL + '/DeleteDocument/' + data.documentID,{ headers }
  ).subscribe({
    next: (res) => {
      console.log(res);
      alert('Deleted Successfully');
      this.GetDocuments();
    },
    error: (err) => {
      console.log(err);
      alert('Delete Failed');
    }
  });
}
  actionComplete(args: any): void {
    if (args.requestType === 'save') {
      if (args.action === 'add') {
        this.saveDocument(args.data);
      } else if (args.action === 'edit') {
        this.updateDocument(args.data);
      }
    } else if (args.requestType === 'delete') {
      this.deleteDocument(args.data[0]);
    }
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
