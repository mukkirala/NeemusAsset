import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridModule, FilterService, SortService, PageService, GroupService } from '@syncfusion/ej2-angular-grids';
import { CommonCardComponent } from '../../../shared/components/common-card/common-card.component';

@Component({
  selector: 'app-audit-completion',
  standalone: true,
  imports: [CommonModule, FormsModule, GridModule, CommonCardComponent],
  providers: [FilterService, SortService, PageService, GroupService],
  templateUrl: './audit-completion.component.html',
  styleUrls: []
})
export class AuditCompletionComponent implements OnInit {
  selectedAudit: string = '';
  selectedDate: string = '';
  remarks: string = '';
  showSuccess: boolean = true; // Based on the screenshot
  
  auditData: any[] = [
    { auditName: 'EIL Audit', auditDescription: 'EIL Office and Store', auditBy: '100495', locationCode: 'NR16', location: 'PROJECT DEPARTMENT', auditCreationDate: '18-Sep-2020', completionDate: '04-May-2026', adminRemarks: '', auditStatus: 'InActive' },
    { auditName: 'Admin audit', auditDescription: 'physical verification of IT assets', auditBy: '100495', locationCode: 'NR64', location: 'ADMINISTRATIVE BUILDING - SITE', auditCreationDate: '14-Aug-2020', completionDate: '04-Jul-2025', adminRemarks: 'test', auditStatus: 'InActive' },
    { auditName: "August'20", auditDescription: "physical verification for month of August'20", auditBy: '100495', locationCode: 'NR11', location: 'IT DEPARTMENT', auditCreationDate: '04-Aug-2020', completionDate: '14-Aug-2020', adminRemarks: 'asset complete', auditStatus: 'InActive' }
  ];

  ngOnInit(): void {
  }

  onMarkComplete() {
    this.showSuccess = true;
    console.log('Marking audit as complete', this.selectedAudit, this.selectedDate, this.remarks);
    setTimeout(() => this.showSuccess = false, 3000);
  }
}
