import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-view-asset-requests',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './view-asset-requests.component.html',
})
export class ViewAssetRequestsComponent implements OnInit {
  @ViewChild(DataTableComponent) table!: DataTableComponent;

  columns: TableColumn[] = [
    { field: 'assetTypeName', headerText: 'Asset Type Name', width: 180 },
    { field: 'requestedQuantity', headerText: 'Req Quantity', width: 130, textAlign: 'Center' },
    { field: 'requestedLocation', headerText: 'Req Location', width: 160 },
    { field: 'custodianId', headerText: 'Cus ID', width: 120 },
    { field: 'custodianDept', headerText: 'Cus Dept', width: 150 },
    { field: 'designation', headerText: 'Designation', width: 150 },
    { field: 'requestDate', headerText: 'Req Date', width: 140 },
    { field: 'status', headerText: 'Status', width: 120, textAlign: 'Center' },
  ];

  data: any[] = [
    {
      assetTypeName: 'Laptop - Dell Latitude',
      requestedQuantity: 1,
      requestedLocation: 'Bangalore Office',
      custodianId: 'EMP101',
      custodianDept: 'Engineering',
      designation: 'Software Engineer',
      requestDate: '2024-04-25',
      status: 'Pending'
    },
    {
      assetTypeName: 'Monitor - 27 inch',
      requestedQuantity: 2,
      requestedLocation: 'Chennai Hub',
      custodianId: 'EMP102',
      custodianDept: 'Design',
      designation: 'UI Designer',
      requestDate: '2024-04-20',
      status: 'Approved'
    },
    {
      assetTypeName: 'Office Chair',
      requestedQuantity: 1,
      requestedLocation: 'Mumbai Office',
      custodianId: 'EMP101',
      custodianDept: 'Engineering',
      designation: 'Software Engineer',
      requestDate: '2024-04-15',
      status: 'Allocated'
    }
  ];

  ngOnInit(): void {
    // In a real app, you would fetch this data from a service
  }
}
