import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-asset-export-history',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './asset-export-history.component.html',
  styleUrls: []
})
export class AssetExportHistoryComponent implements OnInit {
  columns: TableColumn[] = [
    { field: 'updateStatus', headerText: 'Update Status', width: 140 },
    { field: 'updateDate', headerText: 'Update Date', width: 150 },
    { field: 'mainAssetNo', headerText: 'Main Asset No', width: 150, isPrimaryKey: true },
    { field: 'assetSubNo', headerText: 'Asset Sub No', width: 120 },
    { field: 'location', headerText: 'Location', width: 140 },
    { field: 'custId', headerText: 'Cust ID', width: 120 },
    { field: 'status', headerText: 'Status', width: 120 }
  ];

  data: any[] = [
    {
      updateStatus: 'Exported',
      updateDate: '2024-04-25 10:30 AM',
      mainAssetNo: '60050011',
      assetSubNo: '0',
      location: 'HO - Floor 2',
      custId: 'EMP001',
      status: 'Active'
    },
    {
      updateStatus: 'Exported',
      updateDate: '2024-04-26 02:15 PM',
      mainAssetNo: '60050012',
      assetSubNo: '0',
      location: 'HO - Floor 3',
      custId: 'EMP002',
      status: 'Active'
    }
  ];

  ngOnInit(): void {
    // Data is already populated
  }
}
