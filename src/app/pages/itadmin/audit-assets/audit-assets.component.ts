import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule, FilterService, SortService, PageService, GroupService } from '@syncfusion/ej2-angular-grids';
import { CommonCardComponent } from '../../../shared/components/common-card/common-card.component';

@Component({
  selector: 'app-audit-assets',
  standalone: true,
  imports: [CommonModule, GridModule, CommonCardComponent],
  providers: [FilterService, SortService, PageService, GroupService],
  templateUrl: './audit-assets.component.html',
  styleUrls: []
})
export class AuditAssetsComponent implements OnInit {
  
  auditAssetsData: any[] = [
    { assetId: '703', assetClass: '6005', assetDesc: 'Printer', auditStatus: 'Pending', auditedDate: '16-Oct-2024' },
    { assetId: '698', assetClass: '6005', assetDesc: 'A3 Scanner', auditStatus: 'Completed', auditedDate: '18-Nov-2024' },
    { assetId: '102', assetClass: '1001', assetDesc: 'Laptop HP EliteBook', auditStatus: 'Pending', auditedDate: '19-Nov-2024' }
  ];

  ngOnInit(): void {
  }
}
