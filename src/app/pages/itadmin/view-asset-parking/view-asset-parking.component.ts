import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-view-asset-parking',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './view-asset-parking.component.html',
  styleUrls: []
})
export class ViewAssetParkingComponent implements OnInit {
  
  columns: TableColumn[] = [
    { field: 'requestType', headerText: 'Request Type', width: 160 },
    { field: 'custodianId', headerText: 'Custodian ID', width: 140 },
    { field: 'custodianName', headerText: 'Custodian Name', width: 200 },
    { field: 'departmentName', headerText: 'Department Name', width: 180 },
    { field: 'designation', headerText: 'Designation', width: 180 },
    { field: 'action', headerText: '', width: 100, textAlign: 'Center' }
  ];

  data: any[] = [
    { requestType: 'Asset Parking', custodianId: '100495', custodianName: 'Devajit Jaradhara', departmentName: 'ERP', designation: 'SM(IIS)', action: 'View' },
    { requestType: 'Asset Parking', custodianId: '150320', custodianName: 'Ashok Kumar Sharma', departmentName: 'SDU', designation: 'Process Operator', action: 'View' }
  ];

  ngOnInit(): void {
  }
}
