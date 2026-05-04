import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-view-custodian-transfer',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './view-custodian-transfer.component.html',
  styleUrls: []
})
export class ViewCustodianTransferComponent implements OnInit {
  
  approvedColumns: TableColumn[] = [
    { field: 'assetName', headerText: 'AssetName', width: 180 },
    { field: 'requestorId', headerText: 'Requestor ID', width: 120 },
    { field: 'requestorName', headerText: 'Requestor Name', width: 150 },
    { field: 'transferToEmployeeId', headerText: 'Transfer To EmployeeID', width: 160 },
    { field: 'employeeName', headerText: 'EmployeeName', width: 150 },
    { field: 'approverId', headerText: 'Approver ID', width: 120 },
    { field: 'approverName', headerText: 'Approver Name', width: 150 },
    { field: 'adminId', headerText: 'Admin ID', width: 120 },
    { field: 'adminName', headerText: 'Admin Name', width: 150 },
    { field: 'adminRemarks', headerText: 'Admin Remarks', width: 180 },
    { field: 'date', headerText: 'Date', width: 130 },
    { field: 'status', headerText: 'Status', width: 120 }
  ];

  rejectedColumns: TableColumn[] = [
    { field: 'assetName', headerText: 'AssetName', width: 180 },
    { field: 'requestorId', headerText: 'Requestor ID', width: 120 },
    { field: 'requestorName', headerText: 'Requestor Name', width: 150 },
    { field: 'approverId', headerText: 'Approver ID', width: 120 },
    { field: 'approverName', headerText: 'Approver Name', width: 150 },
    { field: 'adminId', headerText: 'Admin ID', width: 120 },
    { field: 'adminName', headerText: 'Admin Name', width: 150 },
    { field: 'adminRemarks', headerText: 'Admin Remarks', width: 180 },
    { field: 'date', headerText: 'Date', width: 130 },
    { field: 'status', headerText: 'Status', width: 120 }
  ];

  approvedData: any[] = [
    {
      assetName: 'Desktop Laser Printer: Wep Laser 1600+',
      requestorId: '100495',
      requestorName: 'Devajit Jaradhara',
      transferToEmployeeId: '100039',
      employeeName: 'Jyoti Prasad Baruah',
      approverId: '100495',
      approverName: 'Devajit Jaradhara',
      adminId: '100495',
      adminName: 'Devajit Jaradhara',
      adminRemarks: 'Approved',
      date: '15-Apr-2024',
      status: 'Approved'
    }
  ];

  rejectedData: any[] = [
    {
      assetName: 'Business Desktop PCs: Wipro WSG37455VE',
      requestorId: '100495',
      requestorName: 'Devajit Jaradhara',
      approverId: '100495',
      approverName: 'Devajit Jaradhara',
      adminId: '100495',
      adminName: 'Devajit Jaradhara',
      adminRemarks: 'Not feasible at this time',
      date: '10-Apr-2024',
      status: 'Rejected'
    }
  ];

  ngOnInit(): void {
  }
}
