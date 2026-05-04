import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';
import { AssetService, Asset } from '../../../core/services/asset.service';

import { CommonCardComponent } from '../../../shared/components/common-card/common-card.component';

@Component({
  selector: 'app-asset-status-change',
  standalone: true,
  imports: [CommonModule, FormsModule, DataTableComponent, CommonCardComponent],
  templateUrl: './asset-status-change.component.html',
  styleUrls: []
})
export class AssetStatusChangeComponent implements OnInit {
  private assetService = inject(AssetService);

  @ViewChild(DataTableComponent) table!: DataTableComponent;

  // Form fields
  selectedAssetId: string = '';
  selectedStatus: string = '';
  
  // Grid data
  showTable: boolean = false;
  tableData: any[] = [];
  
  assets: Asset[] = [];
  statusOptions: string[] = ['Active', 'Inactive', 'Scrapped', 'Sold', 'Pending'];

  columns: TableColumn[] = [
    { field: 'mainAssetNumber', headerText: 'Main Asset Number', width: 160, isPrimaryKey: true },
    { field: 'subNumber', headerText: 'Sub Number', width: 100 },
    { field: 'assetClass', headerText: 'Asset Class', width: 140 },
    { field: 'assetDescription', headerText: 'Asset Description', width: 200 },
    { field: 'statusCode', headerText: 'Asset Status', width: 120 }
  ];

  ngOnInit(): void {
    this.assetService.assets$.subscribe(assets => {
      this.assets = assets;
      // Populate dummy if empty for demo
      if (this.assets.length === 0) {
        this.assets = [
            { id: '1', mainAssetNumber: '60050011', subNumber: '0', assetDescription: 'Dell Laptop', assetClass: 'IT', statusCode: 'Active', custodianDept: 'IT', quantity: 1, acquisitionDate: '2014-12-09', capitalizationDate: '2014-12-09', unit: 'Nos', custodianId: 'EMP001', location: 'HO', component: 'HW', addedOn: new Date() },
            { id: '2', mainAssetNumber: '60050012', subNumber: '0', assetDescription: 'Office Chair', assetClass: 'Furniture', statusCode: 'Active', custodianDept: 'HR', quantity: 1, acquisitionDate: '2014-12-09', capitalizationDate: '2014-12-09', unit: 'Nos', custodianId: 'EMP002', location: 'HO', component: 'FUR', addedOn: new Date() }
        ];
      }
    });
  }

  onChangeStatus(): void {
    if (!this.selectedAssetId || !this.selectedStatus) {
      alert('Please select an asset and a new status.');
      return;
    }

    // Find the asset
    const asset = this.assets.find(a => a.id === this.selectedAssetId || a.mainAssetNumber === this.selectedAssetId);
    
    if (asset) {
      // Simulate status update
      const updatedAsset = { ...asset, statusCode: this.selectedStatus };
      this.tableData = [updatedAsset];
      this.showTable = true;
      console.log('Status changed for asset:', updatedAsset);
    }
  }
}
