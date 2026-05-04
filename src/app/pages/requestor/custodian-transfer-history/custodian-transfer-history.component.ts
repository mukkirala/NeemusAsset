import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-custodian-transfer-history',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './custodian-transfer-history.component.html',
})
export class CustodianTransferHistoryComponent implements OnInit {
  @ViewChild(DataTableComponent) table!: DataTableComponent;

  columns: TableColumn[] = [
    { field: 'mainAssetNo', headerText: 'Main Asset No', width: 150 },
    { field: 'subNo', headerText: 'Sub No', width: 90, textAlign: 'Center' },
    { field: 'assetName', headerText: 'Asset Name', width: 200 },
    { field: 'reqId', headerText: 'Req ID', width: 110 },
    { field: 'regName', headerText: 'Req Name', width: 150 }, // Corrected 'rename' to 'reqname' logic
    { field: 'custCustodianComments', headerText: 'Cust Comments', width: 200, clipMode: 'EllipsisWithTooltip' },
    { field: 'assetClass', headerText: 'Asset Class', width: 150 },
    { field: 'transferToEmp', headerText: 'Transfer To Emp', width: 130 },
    { field: 'empName', headerText: 'Emp Name', width: 150 },
    { field: 'date', headerText: 'Date', width: 140 },
    { field: 'status', headerText: 'Status', width: 120, textAlign: 'Center' },
  ];

  data: any[] = [
    {
      mainAssetNo: 'MA-1005',
      subNo: '00',
      assetName: 'Office Chair',
      reqId: 'REQ-501',
      regName: 'John Doe',
      custCustodianComments: 'Handing over to team lead',
      assetClass: 'Furniture',
      transferToEmp: 'EMP201',
      empName: 'Alice Brown',
      date: '2024-04-29',
      status: 'Pending'
    },
    {
      mainAssetNo: 'MA-1002',
      subNo: '00',
      assetName: 'Monitor - 27 inch',
      reqId: 'REQ-480',
      regName: 'John Doe',
      custCustodianComments: 'Asset no longer needed in my role',
      assetClass: 'Electronics',
      transferToEmp: 'EMP202',
      empName: 'Bob Wilson',
      date: '2024-04-20',
      status: 'Approved'
    }
  ];

  ngOnInit(): void {
  }
}
