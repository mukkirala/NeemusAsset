import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-view-all-requests',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './view-all-requests.component.html',
  styleUrls: []
})
export class ViewAllRequestsComponent implements OnInit {
  
  columns: TableColumn[] = [
    { field: 'requestType', headerText: 'Request Type', width: 160 },
    { field: 'assetName', headerText: 'Asset Name', width: 250 },
    { field: 'requestedDate', headerText: 'Requested Date', width: 150 },
    { field: 'status', headerText: 'Status', width: 180 },
    { field: 'action', headerText: '', width: 100, textAlign: 'Center' }
  ];

  data: any[] = [
    { requestType: 'Asset Request', assetName: 'Desktop Laser Printer: Wep Laser 1600+', requestedDate: '07-Apr-2026', status: 'Approved', action: 'View' },
    { requestType: 'Location Transfer', assetName: 'Entry Level Intel Server', requestedDate: '18-Nov-2024', status: 'Request Sent To Admin', action: 'View' },
    { requestType: 'Location Transfer', assetName: 'Entry Level Intel Server', requestedDate: '18-Nov-2024', status: 'Request Sent To Admin', action: 'View' },
    { requestType: 'Asset Request', assetName: 'Scanner: Model HP G3110', requestedDate: '16-Oct-2024', status: 'Rejected', action: 'View' },
    { requestType: 'Custodian Transfer', assetName: 'Entry Level Intel Server', requestedDate: '03-Apr-2024', status: 'Request Sent To Admin', action: 'View' },
    { requestType: 'Custodian Transfer', assetName: 'Entry Level Intel Server', requestedDate: '03-Apr-2024', status: 'Request Sent To Admin', action: 'View' },
    { requestType: 'Location Transfer', assetName: 'Entry Level Intel Server', requestedDate: '03-Apr-2024', status: 'Approved', action: 'View' },
    { requestType: 'Location Transfer', assetName: 'Entry Level Intel Server', requestedDate: '03-Apr-2024', status: 'Approved', action: 'View' },
    { requestType: 'Asset Request', assetName: 'Overhead Projector', requestedDate: '03-Apr-2024', status: 'Request Sent To Admin', action: 'View' },
    { requestType: 'Asset Request', assetName: 'Business Desktop PCs: Wipro WSG37455VE', requestedDate: '20-Feb-2024', status: 'Rejected', action: 'View' }
  ];

  ngOnInit(): void {
  }
}
