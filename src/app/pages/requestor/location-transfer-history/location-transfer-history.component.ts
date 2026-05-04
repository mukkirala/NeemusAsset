import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-location-transfer-history',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './location-transfer-history.component.html',
})
export class LocationTransferHistoryComponent implements OnInit {
  @ViewChild(DataTableComponent) table!: DataTableComponent;

  columns: TableColumn[] = [
    { field: 'mainAssetNo', headerText: 'Main Asset No', width: 150 },
    { field: 'subNo', headerText: 'Sub No', width: 90, textAlign: 'Center' },
    { field: 'assetName', headerText: 'Asset Name', width: 200 },
    { field: 'custodianId', headerText: 'Cust ID', width: 120 },
    { field: 'custodianName', headerText: 'Cust Name', width: 150 },
    { field: 'assetClass', headerText: 'Asset Class', width: 150 },
    { field: 'custodianDept', headerText: 'Cust Dept', width: 150 },
    { field: 'designation', headerText: 'Designation', width: 150 },
    { field: 'reqLocation', headerText: 'Req Location', width: 150 },
    { field: 'custodianComments', headerText: 'Cust Comments', width: 200, clipMode: 'EllipsisWithTooltip' },
    { field: 'requestDate', headerText: 'Req Date', width: 140 },
    { field: 'status', headerText: 'Status', width: 120, textAlign: 'Center' },
  ];

  data: any[] = [
    {
      mainAssetNo: 'MA-1001',
      subNo: '00',
      assetName: 'Laptop - Dell Latitude',
      custodianId: 'EMP101',
      custodianName: 'John Doe',
      assetClass: 'Electronics',
      custodianDept: 'Engineering',
      designation: 'Software Engineer',
      reqLocation: 'Chennai',
      custodianComments: 'Moving to Chennai branch',
      requestDate: '2024-04-29',
      status: 'Pending'
    },
    {
      mainAssetNo: 'MA-1003',
      subNo: '00',
      assetName: 'Office Chair',
      custodianId: 'EMP105',
      custodianName: 'Mike Johnson',
      assetClass: 'Furniture',
      custodianDept: 'Sales',
      designation: 'Sales Manager',
      reqLocation: 'Mumbai',
      custodianComments: 'Remote work from Mumbai',
      requestDate: '2024-04-25',
      status: 'Approved'
    }
  ];

  ngOnInit(): void {
  }
}
