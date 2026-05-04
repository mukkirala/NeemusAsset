import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-buyback-history',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './buyback-history.component.html',
})
export class BuybackHistoryComponent implements OnInit {
  @ViewChild(DataTableComponent) table!: DataTableComponent;

  columns: TableColumn[] = [
    { field: 'mainAssetNo', headerText: 'Main Asset No', width: 150 },
    { field: 'subNo', headerText: 'Sub No', width: 100, textAlign: 'Center' },
    { field: 'assetName', headerText: 'Asset Name', width: 200 },
    { field: 'custodianId', headerText: 'Cust ID', width: 120 },
    { field: 'custodianName', headerText: 'Cust Name', width: 150 },
    { field: 'custodianDept', headerText: 'Cust Dept', width: 150 },
    { field: 'designation', headerText: 'Designation', width: 150 },
    { field: 'comments', headerText: 'Comments', width: 250, clipMode: 'EllipsisWithTooltip' },
    { field: 'date', headerText: 'Date', width: 140 },
    { field: 'status', headerText: 'Status', width: 120, textAlign: 'Center' },
  ];

  data: any[] = [
    {
      mainAssetNo: 'MA-1001',
      subNo: '00',
      assetName: 'Laptop - Dell Latitude',
      custodianId: 'EMP101',
      custodianName: 'John Doe',
      custodianDept: 'Engineering',
      designation: 'Software Engineer',
      comments: 'Upgrading to a newer model',
      date: '2024-04-29',
      status: 'Pending'
    },
    {
      mainAssetNo: 'MA-1002',
      subNo: '00',
      assetName: 'Monitor - 27 inch',
      custodianId: 'EMP102',
      custodianName: 'Jane Smith',
      custodianDept: 'Design',
      designation: 'UI Designer',
      comments: 'Leaving the company',
      date: '2024-04-28',
      status: 'Received'
    }
  ];

  ngOnInit(): void {
  }
}
