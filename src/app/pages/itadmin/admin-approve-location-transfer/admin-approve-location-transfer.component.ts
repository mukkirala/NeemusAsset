import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-admin-approve-location-transfer',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './admin-approve-location-transfer.component.html',
  styleUrls: []
})
export class AdminApproveLocationTransferComponent implements OnInit {
  
  requestedColumns: TableColumn[] = [
    { field: 'assetName', headerText: 'AssetName', width: 200 },
    { field: 'requestorId', headerText: 'Requestor ID', width: 120 },
    { field: 'requestorName', headerText: 'Requestor Name', width: 150 },
    { field: 'approverId', headerText: 'Approver ID', width: 120 },
    { field: 'approverName', headerText: 'Approver Name', width: 150 },
    { field: 'designation', headerText: 'Designation', width: 140 },
    { field: 'department', headerText: 'Department', width: 140 },
    { field: 'approverRemarks', headerText: 'Approver Remarks', width: 180 },
    { field: 'date', headerText: 'Date', width: 130 },
    { field: 'status', headerText: 'Status', width: 120 },
    { field: 'action', headerText: '', width: 100, textAlign: 'Center' }
  ];

  approvedColumns: TableColumn[] = [
    { field: 'assetName', headerText: 'AssetName', width: 200 },
    { field: 'requestorId', headerText: 'Requestor ID', width: 120 },
    { field: 'requestorName', headerText: 'Requestor Name', width: 150 },
    { field: 'requestedLocation', headerText: 'Requested Location', width: 180 },
    { field: 'approverId', headerText: 'Approver ID', width: 120 },
    { field: 'approverName', headerText: 'Approver Name', width: 150 },
    { field: 'adminId', headerText: 'Admin ID', width: 120 },
    { field: 'adminName', headerText: 'Admin Name', width: 150 },
    { field: 'adminRemarks', headerText: 'Admin Remarks', width: 180 },
    { field: 'date', headerText: 'Date', width: 130 },
    { field: 'status', headerText: 'Status', width: 120 }
  ];

  requestedData: any[] = [
    {
      assetName: 'Business Laptop Computer: HP Pro Book 440 G5',
      requestorId: '100495',
      requestorName: 'Devajit Jaradhara',
      approverId: '100099',
      approverName: 'Shyam Sundar Baruah',
      designation: 'GM (IIS)',
      department: 'ERP',
      approverRemarks: 'test approver',
      date: '17-Mar-2023',
      status: 'Request Sent To Admin',
      action: 'View'
    }
  ];

  approvedData: any[] = [];

  ngOnInit(): void {
  }
}
