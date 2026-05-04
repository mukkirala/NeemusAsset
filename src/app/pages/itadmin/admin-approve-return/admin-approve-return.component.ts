import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-admin-approve-return',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './admin-approve-return.component.html',
  styleUrls: []
})
export class AdminApproveReturnComponent implements OnInit {
  
  requestedColumns: TableColumn[] = [
    { field: 'assetName', headerText: 'Asset Name', width: 200 },
    { field: 'requestorId', headerText: 'Requestor ID', width: 120 },
    { field: 'requestorName', headerText: 'Requestor Name', width: 150 },
    { field: 'department', headerText: 'Department', width: 140 },
    { field: 'designation', headerText: 'Designation', width: 140 },
    { field: 'date', headerText: 'Date', width: 130 },
    { field: 'status', headerText: 'Status', width: 120 }
  ];

  approvedColumns: TableColumn[] = [
    { field: 'assetName', headerText: 'Asset Name', width: 200 },
    { field: 'requestorId', headerText: 'Requestor ID', width: 120 },
    { field: 'requestorName', headerText: 'Requestor Name', width: 150 },
    { field: 'adminId', headerText: 'Admin ID', width: 120 },
    { field: 'adminName', headerText: 'Admin Name', width: 150 },
    { field: 'adminRemarks', headerText: 'Admin Remarks', width: 180 },
    { field: 'date', headerText: 'Date', width: 130 },
    { field: 'status', headerText: 'Status', width: 120 }
  ];

  requestedData: any[] = [];
  approvedData: any[] = [];

  ngOnInit(): void {
  }
}
