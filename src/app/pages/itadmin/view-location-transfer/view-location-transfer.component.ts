import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-view-location-transfer',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './view-location-transfer.component.html',
  styleUrls: []
})
export class ViewLocationTransferComponent implements OnInit {
  
  historyColumns: TableColumn[] = [
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

  approvedData: any[] = [
    {
      assetName: 'Business Desktop PCs: Wipro WSG37455VE',
      requestorId: '100495',
      requestorName: 'Devajit Jaradhara',
      requestedLocation: 'NITROGEN PLANT',
      approverId: '100039',
      approverName: 'Jyoti Prasad Baruah',
      adminId: '100495',
      adminName: 'Devajit Jaradhara',
      adminRemarks: 'Approved',
      date: '10-Apr-2024',
      status: 'Approved'
    }
  ];

  rejectedData: any[] = [
    {
      assetName: 'Desktop Laser Printer: Wep Laser 1600+',
      requestorId: '100495',
      requestorName: 'Devajit Jaradhara',
      requestedLocation: '16 UNIT QUARTER',
      approverId: '100099',
      approverName: 'Shyam Sundar Baruah',
      adminId: '100495',
      adminName: 'Devajit Jaradhara',
      adminRemarks: 'Insufficient justification',
      date: '05-Apr-2024',
      status: 'Rejected'
    }
  ];

  ngOnInit(): void {
  }
}
