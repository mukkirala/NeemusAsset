import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-asset-requests',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './asset-requests.component.html',
})
export class AssetRequestsComponent implements OnInit {

  // Columns for New Asset Request List
  newRequestColumns: TableColumn[] = [
    { field: 'asset', headerText: 'Asset', width: 180 },
    { field: 'reqId', headerText: 'Req ID', width: 120 },
    { field: 'reqName', headerText: 'Req Name', width: 150 },
    { field: 'location', headerText: 'Location', width: 150 },
    { field: 'department', headerText: 'Department', width: 150 },
    { field: 'designation', headerText: 'Designation', width: 150 },
    { field: 'reqQuantity', headerText: 'Req Quantity', width: 130, textAlign: 'Center' },
    { field: 'date', headerText: 'Date', width: 140 },
    { field: 'status', headerText: 'Status', width: 120, textAlign: 'Center' },
  ];

  // Columns for Approved Asset List
  approvedRequestColumns: TableColumn[] = [
    { field: 'asset', headerText: 'Asset', width: 180 },
    { field: 'reqId', headerText: 'Req ID', width: 120 },
    { field: 'reqName', headerText: 'Req Name', width: 150 },
    { field: 'location', headerText: 'Location', width: 150 },
    { field: 'reqQuantity', headerText: 'Req Quantity', width: 130, textAlign: 'Center' },
    { field: 'approverId', headerText: 'Approver ID', width: 130 },
    { field: 'approverName', headerText: 'Approver Name', width: 150 },
    { field: 'approverRemarks', headerText: 'Approver Remarks', width: 200, clipMode: 'EllipsisWithTooltip' },
    { field: 'date', headerText: 'Date', width: 140 },
    { field: 'status', headerText: 'Status', width: 120, textAlign: 'Center' },
  ];

  // Mock data for New Requests
  newRequestsData: any[] = [
    {
      asset: 'Laptop - Dell Latitude',
      reqId: 'REQ-1001',
      reqName: 'Alice Smith',
      location: 'Bangalore',
      department: 'IT',
      designation: 'Software Engineer',
      reqQuantity: 1,
      date: '2024-04-29',
      status: 'Pending'
    },
    {
      asset: 'Office Chair',
      reqId: 'REQ-1002',
      reqName: 'Bob Jones',
      location: 'Chennai',
      department: 'HR',
      designation: 'HR Specialist',
      reqQuantity: 2,
      date: '2024-04-28',
      status: 'Pending'
    }
  ];

  // Mock data for Approved Requests
  approvedRequestsData: any[] = [
    {
      asset: 'Monitor - 27 inch',
      reqId: 'REQ-0995',
      reqName: 'Charlie Brown',
      location: 'Delhi',
      reqQuantity: 1,
      approverId: 'APP-001',
      approverName: 'Admin User',
      approverRemarks: 'Approved for new workstation setup',
      date: '2024-04-20',
      status: 'Forwarded to Admin'
    }
  ];

  ngOnInit(): void {
  }
}
