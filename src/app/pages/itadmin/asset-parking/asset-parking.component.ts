import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-asset-parking',
  standalone: true,
  imports: [CommonModule, FormsModule, DataTableComponent],
  templateUrl: './asset-parking.component.html',
  styleUrls: []
})
export class AssetParkingComponent implements OnInit {
  
  detailsColumns: TableColumn[] = [
    { field: 'id', headerText: '#', width: 60 },
    { field: 'assetId', headerText: 'Asset ID', width: 120 },
    { field: 'mainAssetNumber', headerText: 'Main Asset Number', width: 150 },
    { field: 'assetsSubNumber', headerText: 'AssetsSubNumber', width: 150 },
    { field: 'assetClass', headerText: 'AssetClass', width: 150 },
    { field: 'assetType', headerText: 'AssetType', width: 150 },
    { field: 'status', headerText: 'Status', width: 120 }
  ];

  selectedColumns: TableColumn[] = [
    { field: 'assetId', headerText: 'Asset ID', width: 120 },
    { field: 'mainAssetNumber', headerText: 'Main Asset Number', width: 150 },
    { field: 'assetsSubNumber', headerText: 'AssetsSubNumber', width: 150 },
    { field: 'assetClass', headerText: 'AssetClass', width: 150 },
    { field: 'assetType', headerText: 'AssetType', width: 150 },
    { field: 'action', headerText: 'Delete', width: 100, textAlign: 'Center' }
  ];

  detailsData: any[] = [];
  selectedData: any[] = [];

  formModel = {
    custodian: '',
    location: '',
    assetClass: '',
    assetType: '',
    quantity: 0,
    remarks: ''
  };

  ngOnInit(): void {
  }

  onAdd() {
    console.log('Adding to list...');
  }

  onPark() {
    console.log('Parking assets...');
  }
}
