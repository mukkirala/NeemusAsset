import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-admin-approve-allocation',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './admin-approve-allocation.component.html',
  styleUrls: []
})
export class AdminApproveAllocationComponent implements OnInit {
  
  requestedColumns: TableColumn[] = [
    { field: 'assetTypeName', headerText: 'Asset Type Name', width: 180 },
    { field: 'requestorId', headerText: 'Requestor ID', width: 120 },
    { field: 'requestorName', headerText: 'Requestor Name', width: 150 },
    { field: 'requestorLocation', headerText: 'Requestor Location', width: 180 },
    { field: 'requestedQuantity', headerText: 'Requested Quantity', width: 140, textAlign: 'Center' },
    { field: 'approverId', headerText: 'Approver ID', width: 120 },
    { field: 'approverName', headerText: 'Approver Name', width: 150 },
    { field: 'approverRemarks', headerText: 'Approver Remarks', width: 180 },
    { field: 'date', headerText: 'Date', width: 130 },
    { field: 'action', headerText: '', width: 100, textAlign: 'Center' }
  ];

  approvedColumns: TableColumn[] = [
    { field: 'assetTypeName', headerText: 'Asset Type Name', width: 180 },
    { field: 'requestorId', headerText: 'Requestor ID', width: 120 },
    { field: 'requestorName', headerText: 'Requestor Name', width: 150 },
    { field: 'requestorLocation', headerText: 'Requestor Location', width: 180 },
    { field: 'approverId', headerText: 'Approver ID', width: 120 },
    { field: 'approverName', headerText: 'Approver Name', width: 150 },
    { field: 'adminId', headerText: 'Admin ID', width: 120 },
    { field: 'adminName', headerText: 'Admin Name', width: 150 },
    { field: 'requestedQuantity', headerText: 'Req Qty', width: 100, textAlign: 'Center' },
    { field: 'approvedQuantity', headerText: 'App Qty', width: 100, textAlign: 'Center' },
    { field: 'adminRemarks', headerText: 'Admin Remarks', width: 180 },
    { field: 'date', headerText: 'Date', width: 130 }
  ];

  requestedData: any[] = [
    {
      assetTypeName: 'Overhead Projector',
      requestorId: '100495',
      requestorName: 'Devajit Jaradhara',
      requestorLocation: 'NITROGEN PLANT',
      requestedQuantity: 2,
      approverId: '100099',
      approverName: 'Shyam Sundar Baruah',
      approverRemarks: 'available',
      date: '03-Apr-2024',
      action: 'View'
    },
    {
      assetTypeName: 'Business Desktop PCs: Wipro WSG37455VE',
      requestorId: '100495',
      requestorName: 'Devajit Jaradhara',
      requestorLocation: '16 UNIT QUARTER',
      requestedQuantity: 2,
      approverId: '100039',
      approverName: '',
      approverRemarks: '',
      date: '20-Feb-2024',
      action: 'View'
    }
  ];

  approvedData: any[] = [
    {
      assetTypeName: 'Desktop Laser Printer: Wep Laser 1600+',
      requestorId: '100495',
      requestorName: 'Devajit Jaradhara',
      requestorLocation: 'NITROGEN PLANT',
      approverId: '100099',
      approverName: 'Shyam Sundar Baruah',
      adminId: '100495',
      adminName: 'Devajit Jaradhara',
      requestedQuantity: 1,
      approvedQuantity: 1,
      adminRemarks: '',
      date: '03-Apr-2024'
    }
  ];

  ngOnInit(): void {
  }
}
