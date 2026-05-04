import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-custodian-transfer-requests',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './custodian-transfer-requests.component.html',
})
export class CustodianTransferRequestsComponent implements OnInit {

  // Columns for New Custodian Transfer Request List
  newRequestColumns: TableColumn[] = [
    { field: 'assetName', headerText: 'Asset Name', width: 180 },
    { field: 'reqId', headerText: 'Req ID', width: 120 },
    { field: 'reqName', headerText: 'Req Name', width: 150 },
    { field: 'transferTo', headerText: 'Transfer To', width: 150 },
    { field: 'reqComments', headerText: 'Req Comments', width: 200, clipMode: 'EllipsisWithTooltip' },
    { field: 'date', headerText: 'Date', width: 140 },
    { field: 'status', headerText: 'Status', width: 120, textAlign: 'Center' },
  ];

  // Columns for Approved Custodian Transfer List
  approvedRequestColumns: TableColumn[] = [
    { field: 'assetName', headerText: 'Asset Name', width: 180 },
    { field: 'reqId', headerText: 'Req ID', width: 120 },
    { field: 'reqName', headerText: 'Req Name', width: 150 },
    { field: 'transferTo', headerText: 'Transfer To', width: 150 },
    { field: 'approverId', headerText: 'Approver ID', width: 130 },
    { field: 'approverRemarks', headerText: 'Approver Remarks', width: 200, clipMode: 'EllipsisWithTooltip' },
    { field: 'date', headerText: 'Date', width: 140 },
    { field: 'status', headerText: 'Status', width: 120, textAlign: 'Center' },
  ];

  // Mock data for New Requests
  newRequestsData: any[] = [
    {
      assetName: 'Office Chair',
      reqId: 'CUST-TR-701',
      reqName: 'John Doe',
      transferTo: 'Alice Brown (EMP201)',
      reqComments: 'Project handover',
      date: '2024-04-29',
      status: 'Pending'
    },
    {
      assetName: 'Laptop - Dell Latitude',
      reqId: 'CUST-TR-702',
      reqName: 'Jane Smith',
      transferTo: 'Bob Wilson (EMP202)',
      reqComments: 'Internship completed, reassigning asset',
      date: '2024-04-28',
      status: 'Pending'
    }
  ];

  // Mock data for Approved Requests
  approvedRequestsData: any[] = [
    {
      assetName: 'Monitor - 27 inch',
      reqId: 'CUST-TR-680',
      reqName: 'Sarah Jenkins',
      transferTo: 'Charlie Davis (EMP203)',
      approverId: 'APP-001',
      approverRemarks: 'Verified and approved for transfer',
      date: '2024-04-20',
      status: 'Forwarded to Admin'
    }
  ];

  ngOnInit(): void {
  }
}
