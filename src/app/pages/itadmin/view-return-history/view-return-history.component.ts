import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-view-return-history',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './view-return-history.component.html',
  styleUrls: []
})
export class ViewReturnHistoryComponent implements OnInit {
  
  historyColumns: TableColumn[] = [
    { field: 'assetName', headerText: 'Asset Name', width: 200 },
    { field: 'requestorId', headerText: 'Requestor ID', width: 120 },
    { field: 'requestorName', headerText: 'Requestor Name', width: 150 },
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
