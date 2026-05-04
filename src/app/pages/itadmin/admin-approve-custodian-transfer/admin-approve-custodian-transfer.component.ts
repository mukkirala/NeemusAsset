import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-admin-approve-custodian-transfer',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './admin-approve-custodian-transfer.component.html',
  styleUrls: []
})
export class AdminApproveCustodianTransferComponent implements OnInit {
  
  requestedColumns: TableColumn[] = [
    { field: 'assetName', headerText: 'AssetName', width: 180 },
    { field: 'requestorId', headerText: 'Requestor ID', width: 120 },
    { field: 'requestorName', headerText: 'Requestor Name', width: 150 },
    { field: 'transferTo', headerText: 'TransferTo', width: 150 },
    { field: 'approverId', headerText: 'Approver ID', width: 120 },
    { field: 'approverName', headerText: 'Approver Name', width: 150 },
    { field: 'approverRemarks', headerText: 'Approver Remarks', width: 180 },
    { field: 'date', headerText: 'Date', width: 130 },
    { field: 'status', headerText: 'Status', width: 120 }
  ];

  approvedColumns: TableColumn[] = [
    { field: 'assetName', headerText: 'AssetName', width: 180 },
    { field: 'requestorId', headerText: 'Requestor ID', width: 120 },
    { field: 'requestorName', headerText: 'Requestor Name', width: 150 },
    { field: 'transferTo', headerText: 'TransferTo', width: 150 },
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
      assetName: 'Business Desktop PCs: Wipro WSG37455VE',
      requestorId: '100495',
      requestorName: 'Devajit Jaradhara',
      transferTo: '100099 - Shyam Sundar Baruah',
      approverId: '100495',
      approverName: 'Devajit Jaradhara',
      approverRemarks: 'Approved for transfer',
      date: '20-Apr-2024',
      status: 'Pending Admin'
    }
  ];

  approvedData: any[] = [
    {
      assetName: 'Desktop Laser Printer: Wep Laser 1600+',
      requestorId: '100495',
      requestorName: 'Devajit Jaradhara',
      transferTo: '100039 - Jyoti Prasad Baruah',
      approverId: '100495',
      approverName: 'Devajit Jaradhara',
      adminId: '100495',
      adminName: 'Devajit Jaradhara',
      adminRemarks: 'Processed',
      date: '15-Apr-2024',
      status: 'Completed'
    }
  ];

  ngOnInit(): void {
  }
}
