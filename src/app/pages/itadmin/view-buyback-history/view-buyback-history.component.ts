import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-view-buyback-history',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './view-buyback-history.component.html',
  styleUrls: []
})
export class ViewBuybackHistoryComponent implements OnInit {
  
  historyColumns: TableColumn[] = [
    { field: 'assetName', headerText: 'AssetName', width: 200 },
    { field: 'requestorId', headerText: 'Requestor ID', width: 120 },
    { field: 'requestorName', headerText: 'Requestor Name', width: 150 },
    { field: 'department', headerText: 'Department', width: 140 },
    { field: 'designation', headerText: 'Designation', width: 140 },
    { field: 'adminId', headerText: 'Admin ID', width: 120 },
    { field: 'adminName', headerText: 'Admin Name', width: 150 },
    { field: 'adminRemarks', headerText: 'Admin Remarks', width: 180 },
    { field: 'date', headerText: 'Date', width: 130 },
    { field: 'status', headerText: 'Status', width: 120 }
  ];

  approvedData: any[] = [];
  rejectedData: any[] = [];

  ngOnInit(): void {
  }
}
