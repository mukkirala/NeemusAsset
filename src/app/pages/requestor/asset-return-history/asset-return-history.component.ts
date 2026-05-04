import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-asset-return-history',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './asset-return-history.component.html',
})
export class AssetReturnHistoryComponent implements OnInit {
  @ViewChild(DataTableComponent) table!: DataTableComponent;

  columns: TableColumn[] = [
    { field: 'mainAssetNo', headerText: 'Main Asset No', width: 150 },
    { field: 'subNo', headerText: 'Sub No', width: 90, textAlign: 'Center' },
    { field: 'assetName', headerText: 'Asset Name', width: 200 },
    { field: 'custodianId', headerText: 'Cust ID', width: 120 },
    { field: 'custodianName', headerText: 'Cust Name', width: 150 },
    { field: 'custodianDept', headerText: 'Cust Dept', width: 150 },
    { field: 'designation', headerText: 'Designation', width: 150 },
    { field: 'custodianComments', headerText: 'Cust Comments', width: 200, clipMode: 'EllipsisWithTooltip' },
    { field: 'assetClass', headerText: 'Asset Class', width: 150 },
    { field: 'date', headerText: 'Date', width: 140 },
    { field: 'status', headerText: 'Status', width: 120, textAlign: 'Center' },
  ];

  data: any[] = [
    {
      mainAssetNo: 'MA-1002',
      subNo: '00',
      assetName: 'Monitor - 27 inch',
      custodianId: 'EMP101',
      custodianName: 'John Doe',
      custodianDept: 'Engineering',
      designation: 'Software Engineer',
      custodianComments: 'Returning unused second monitor',
      assetClass: 'Electronics',
      date: '2024-04-29',
      status: 'Pending'
    },
    {
      mainAssetNo: 'MA-1010',
      subNo: '00',
      assetName: 'Office Desk',
      custodianId: 'EMP110',
      custodianName: 'Sarah Jenkins',
      custodianDept: 'HR',
      designation: 'HR Specialist',
      custodianComments: 'Office renovation return',
      assetClass: 'Furniture',
      date: '2024-04-22',
      status: 'Received'
    }
  ];

  ngOnInit(): void {
  }
}
