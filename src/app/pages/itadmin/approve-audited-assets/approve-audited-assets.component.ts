import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridModule, FilterService, SortService, PageService, GroupService } from '@syncfusion/ej2-angular-grids';
import { CommonCardComponent } from '../../../shared/components/common-card/common-card.component';

@Component({
  selector: 'app-approve-audited-assets',
  standalone: true,
  imports: [CommonModule, FormsModule, GridModule, CommonCardComponent],
  providers: [FilterService, SortService, PageService, GroupService],
  templateUrl: './approve-audited-assets.component.html',
  styleUrls: []
})
export class ApproveAuditedAssetsComponent implements OnInit {
  
  auditedData: any[] = [
    { 
      assetId: '703', mainAssetNumber: '60050040', assetClass: '6005', 
      assetDesc: 'Printer, Copier cum Scanner cum Fax', auditName: 'test audit', 
      auditBy: 'z_sohel', auditorRemarks: 'wewd', auditedDate: '16-Oct-2024', 
      assetStatus: 'Asset Available', statusChangedTo: 'Asset Location Transferred', 
      assetLocation: 'CISF', locationChangedTo: 'CISF' 
    },
    { 
      assetId: '698', mainAssetNumber: '60050011', assetClass: '6005', 
      assetDesc: 'A3 Size Multi Function Printing Device(HP M5025)', auditName: 'test audit', 
      auditBy: 'z_sohel', auditorRemarks: 'add', auditedDate: '18-Nov-2024', 
      assetStatus: 'Asset Avbl but Damaged', statusChangedTo: 'Asset Available', 
      assetLocation: 'IT DEPARTMENT', locationChangedTo: 'FIELD OFFICE' 
    }
  ];

  selectedData: any[] = [];
  remarks: string = '';
  selectedAudit: string = 'test audit';

  ngOnInit(): void {
  }

  onAdd() {
    console.log('Adding selected assets to approval queue...');
  }

  onApprove() {
    console.log('Approving assets...', this.remarks);
  }

  onReject() {
    console.log('Rejecting assets...', this.remarks);
  }
}
