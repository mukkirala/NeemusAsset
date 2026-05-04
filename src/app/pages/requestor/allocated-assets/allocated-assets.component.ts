import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';
import { AssetService, Asset } from '../../../core/services/asset.service';

@Component({
  selector: 'app-allocated-assets',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './allocated-assets.component.html',
  styleUrls: ['./allocated-assets.component.css'],
})
export class AllocatedAssetsComponent implements OnInit {
  private assetService = inject(AssetService);

  @ViewChild(DataTableComponent) table!: DataTableComponent;

  columns: TableColumn[] = [
    { field: 'mainAssetNumber', headerText: 'Main Asset No', width: 150, isPrimaryKey: true },
    { field: 'subNumber', headerText: 'Sub No', width: 100 },
    { field: 'assetDescription', headerText: 'Asset Name', width: 200 },
    { field: 'assetClass', headerText: 'Class', width: 150 },
    { field: 'location', headerText: 'Location', width: 150 },
    { field: 'custodianId', headerText: 'Cust ID', width: 120 },
    { field: 'custodianName', headerText: 'Cust Name', width: 150 }, // Note: Field not in Asset interface yet
    { field: 'custodianDept', headerText: 'Dept', width: 150 },
    { field: 'statusCode', headerText: 'Status Desc', width: 120 },
  ];

  data: Asset[] = [];

  ngOnInit(): void {
    this.assetService.assets$.subscribe(assets => {
      // Filter assets for the current requestor if needed
      // For now, showing all assets
      this.data = assets.map(asset => ({
        ...asset,
        custodianName: 'N/A' // Placeholder
      }));
    });
  }
}
