import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-view-asset-allocation',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './view-asset-allocation.component.html',
  styleUrls: []
})
export class ViewAssetAllocationComponent implements OnInit {
  
  approvedColumns: TableColumn[] = [
    { field: 'assetTypeName', headerText: 'Asset Type Name', width: 200 },
    { field: 'requestorId', headerText: 'Requestor ID', width: 120 },
    { field: 'requestorName', headerText: 'Requestor Name', width: 160 },
    { field: 'department', headerText: 'Department', width: 140 },
    { field: 'designation', headerText: 'Designation', width: 140 },
    { field: 'requestedQuantity', headerText: 'Requested Qty', width: 140, textAlign: 'Center' },
    { field: 'approvedQuantity', headerText: 'Approved Qty', width: 140, textAlign: 'Center' },
    { field: 'requestedDate', headerText: 'Requested Date', width: 140 },
    { field: 'requestStatus', headerText: 'Request Status', width: 140 }
  ];

  rejectedColumns: TableColumn[] = [
    { field: 'assetTypeName', headerText: 'Asset Type Name', width: 200 },
    { field: 'requestorId', headerText: 'Requestor ID', width: 120 },
    { field: 'requestorName', headerText: 'Requestor Name', width: 160 },
    { field: 'department', headerText: 'Department', width: 140 },
    { field: 'designation', headerText: 'Designation', width: 140 },
    { field: 'requestedQuantity', headerText: 'Requested Qty', width: 140, textAlign: 'Center' },
    { field: 'date', headerText: 'Date', width: 140 },
    { field: 'requestStatus', headerText: 'Request Status', width: 140 }
  ];

  approvedData: any[] = [
    {
      assetTypeName: 'Desktop Laser Printer: Wep Laser 1600+',
      requestorId: '100495',
      requestorName: 'Devajit Jaradhara',
      department: 'ERP',
      designation: 'SM(IIS)',
      requestedQuantity: 1,
      approvedQuantity: 1,
      requestedDate: '07-Apr-2024',
      requestStatus: 'Approved'
    }
  ];

  rejectedData: any[] = [
    {
      assetTypeName: 'Scanner: Model HP G3110',
      requestorId: '100495',
      requestorName: 'Devajit Jaradhara',
      department: 'ERP',
      designation: 'SM(IIS)',
      requestedQuantity: 1,
      date: '16-Oct-2024',
      requestStatus: 'Rejected'
    },
    {
      assetTypeName: 'Business Desktop PCs: Wipro WSG37455VE',
      requestorId: '100495',
      requestorName: 'Devajit Jaradhara',
      department: 'ERP',
      designation: 'SM(IIS)',
      requestedQuantity: 3,
      date: '20-Feb-2024',
      requestStatus: 'Rejected'
    }
  ];

  ngOnInit(): void {
  }
}
