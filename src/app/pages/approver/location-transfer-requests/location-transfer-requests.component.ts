import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-location-transfer-requests',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './location-transfer-requests.component.html',
})
export class LocationTransferRequestsComponent implements OnInit {

  // Columns for New Location Transfer Request List
  newRequestColumns: TableColumn[] = [
    { field: 'assetName', headerText: 'Asset Name', width: 180 },
    { field: 'reqId', headerText: 'Req ID', width: 120 },
    { field: 'reqName', headerText: 'Req Name', width: 150 },
    { field: 'dept', headerText: 'Dept', width: 150 },
    { field: 'designation', headerText: 'Designation', width: 150 },
    { field: 'reqLocation', headerText: 'Req Location', width: 150 },
    { field: 'reqComments', headerText: 'Req Comments', width: 200, clipMode: 'EllipsisWithTooltip' },
    { field: 'date', headerText: 'Date', width: 140 },
    { field: 'status', headerText: 'Status', width: 120, textAlign: 'Center' },
  ];

  // Columns for Approved Location Transfer List
  approvedRequestColumns: TableColumn[] = [
    { field: 'assetName', headerText: 'Asset Name', width: 180 },
    { field: 'reqId', headerText: 'Req ID', width: 120 },
    { field: 'reqName', headerText: 'Req Name', width: 150 },
    { field: 'reqLocation', headerText: 'Req Location', width: 150 },
    { field: 'approverId', headerText: 'Approver ID', width: 130 },
    { field: 'approverName', headerText: 'Approver Name', width: 150 },
    { field: 'approverRemarks', headerText: 'Approver Remarks', width: 200, clipMode: 'EllipsisWithTooltip' },
    { field: 'date', headerText: 'Date', width: 140 },
    { field: 'status', headerText: 'Status', width: 120, textAlign: 'Center' },
  ];

  // Mock data for New Requests
  newRequestsData: any[] = [
    {
      assetName: 'Laptop - Dell Latitude',
      reqId: 'LOC-TR-501',
      reqName: 'Alice Brown',
      dept: 'Engineering',
      designation: 'Software Engineer',
      reqLocation: 'Chennai',
      reqComments: 'Relocating to Chennai office',
      date: '2024-04-29',
      status: 'Pending'
    },
    {
      assetName: 'Office Chair',
      reqId: 'LOC-TR-502',
      reqName: 'Bob Wilson',
      dept: 'Sales',
      designation: 'Sales Executive',
      reqLocation: 'Mumbai',
      reqComments: 'Remote desk setup in Mumbai',
      date: '2024-04-28',
      status: 'Pending'
    }
  ];

  // Mock data for Approved Requests
  approvedRequestsData: any[] = [
    {
      assetName: 'Monitor - 27 inch',
      reqId: 'LOC-TR-490',
      reqName: 'Charlie Davis',
      reqLocation: 'Hyderabad',
      approverId: 'APP-001',
      approverName: 'Admin User',
      approverRemarks: 'Approved for branch transfer',
      date: '2024-04-25',
      status: 'Approved'
    }
  ];

  ngOnInit(): void {
  }
}
