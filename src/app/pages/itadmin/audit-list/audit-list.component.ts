import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  GridModule, 
  FilterService, 
  SortService, 
  PageService, 
  GroupService,
  ToolbarService,
  ExcelExportService,
  PdfExportService,
  GridComponent
} from '@syncfusion/ej2-angular-grids';
import { CommonCardComponent } from '../../../shared/components/common-card/common-card.component';

@Component({
  selector: 'app-audit-list',
  standalone: true,
  imports: [CommonModule, FormsModule, GridModule, CommonCardComponent],
  providers: [FilterService, SortService, PageService, GroupService, ToolbarService, ExcelExportService, PdfExportService],
  templateUrl: './audit-list.component.html',
  styleUrls: []
})
export class AuditListComponent implements OnInit {
  @ViewChild('grid') public grid!: GridComponent;
  
  toolbarOptions: string[] = ['Search', 'ExcelExport', 'PdfExport'];
  filterType: string = 'All';

  public rawData: any[] = [
    { auditName: 'test audit', auditDescription: 'test added', createdBy: 'z_sohel', locationCode: 'NR72', location: 'NITROGEN PLANT', auditDate: '25-Apr-2023', auditStatus: 'Active' },
    { auditName: 'Q2 Asset Verification', auditDescription: 'Quarterly verification of all IT assets', createdBy: 'Admin User', locationCode: 'HO01', location: 'Head Office', auditDate: '15-Apr-2026', auditStatus: 'In Progress' },
    { auditName: 'Data Center Audit', auditDescription: 'Full audit of server room assets', createdBy: 'System Admin', locationCode: 'DC01', location: 'Data Center', auditDate: '20-Apr-2026', auditStatus: 'Pending' },
    { auditName: 'Annual Review', auditDescription: 'Annual IT asset review', createdBy: 'Jane Doe', locationCode: 'NR11', location: 'IT DEPARTMENT', auditDate: '01-Jan-2026', auditStatus: 'Completed' },
    { auditName: 'Software Audit', auditDescription: 'Verification of software licenses', createdBy: 'z_sohel', locationCode: 'NR72', location: 'NITROGEN PLANT', auditDate: '10-Feb-2026', auditStatus: 'Approved' }
  ];

  public auditData: any[] = [];

  ngOnInit(): void {
    this.auditData = [...this.rawData];
  }

  toolbarClick(args: any): void {
    if (args.item.id.includes('excelexport')) {
      this.grid.excelExport();
    } else if (args.item.id.includes('pdfexport')) {
      this.grid.pdfExport();
    }
  }

  onFilterChange() {
    if (this.filterType === 'All') {
      this.auditData = [...this.rawData];
    } else if (this.filterType === 'Current') {
      this.auditData = this.rawData.filter(a => a.auditStatus === 'Active' || a.auditStatus === 'In Progress');
    } else if (this.filterType === 'Pending') {
      this.auditData = this.rawData.filter(a => a.auditStatus === 'Pending');
    } else if (this.filterType === 'Completed') {
      this.auditData = this.rawData.filter(a => a.auditStatus === 'Completed');
    } else if (this.filterType === 'Approved') {
      this.auditData = this.rawData.filter(a => a.auditStatus === 'Approved');
    } else if (this.filterType === 'LocationWise') {
      this.auditData = [...this.rawData];
      setTimeout(() => {
         this.grid.groupColumn('location');
      }, 100);
      return;
    }
    
    // Clear grouping if not LocationWise
    if (this.filterType !== 'LocationWise' && this.grid && this.grid.groupSettings.columns?.length) {
      this.grid.clearGrouping();
    }
  }
}
