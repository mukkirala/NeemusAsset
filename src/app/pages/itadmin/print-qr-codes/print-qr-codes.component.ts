import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

import { QRCodeGeneratorModule } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  selector: 'app-print-qr-codes',
  standalone: true,
  imports: [CommonModule, DataTableComponent, QRCodeGeneratorModule],
  templateUrl: './print-qr-codes.component.html',
  styleUrls: []
})
export class PrintQrCodesComponent implements OnInit {
  @ViewChild(DataTableComponent) table!: DataTableComponent;

  columns: TableColumn[] = [
    { field: 'mainAssetNumber', headerText: 'Main Asset No', width: 140, isPrimaryKey: true },
    { field: 'subNumber', headerText: 'Sub No', width: 100 },
    { field: 'assetClass', headerText: 'Asset Class', width: 130 },
    { field: 'assetDescription', headerText: 'Asset Desc', width: 180 },
    { field: 'additionalDescription', headerText: 'Additional Desc', width: 180 },
    { field: 'custodianId', headerText: 'Cust ID', width: 120 },
    { field: 'custodianName', headerText: 'Cust Name', width: 150 },
    { field: 'custodianDept', headerText: 'Cust Dept', width: 130 },
    { field: 'location', headerText: 'Location', width: 130 },
    { field: 'locationDescription', headerText: 'Location Desc', width: 150 },
    { field: 'status', headerText: 'Status', width: 100 },
    { field: 'statusDescription', headerText: 'Status Desc', width: 150 },
    { field: 'quantity', headerText: 'Quantity', width: 100, textAlign: 'Right' },
    { field: 'unit', headerText: 'Unit', width: 80 },
    { field: 'assetCapitalizationDate', headerText: 'Asset Capitalization Date', width: 180 },
    { field: 'firstAcquisitionDate', headerText: 'First Acquisition Date', width: 180 },
    { field: 'component', headerText: 'Component', width: 130 },
    { field: 'componentDescription', headerText: 'Component Desc', width: 150 },
    { field: 'deactivationDate', headerText: 'Deactivation Date', width: 160 },
    { field: 'inventoryDate', headerText: 'Inventory Date', width: 150 },
    { field: 'inventoryNote', headerText: 'Inventory Note', width: 150 },
    { field: 'qrCode', headerText: 'QR Code', width: 120 },
    { field: 'qrImage', headerText: 'QR Image', width: 120 },
    { field: 'importedDate', headerText: 'Imported Date', width: 150 }
  ];

  data: any[] = [
    {
      mainAssetNumber: 'AST-001',
      subNumber: '0',
      assetClass: 'Laptop',
      assetDescription: 'Dell XPS 15',
      additionalDescription: 'i7, 16GB RAM, 512GB SSD',
      custodianId: 'EMP001',
      custodianName: 'John Doe',
      custodianDept: 'IT',
      location: 'Bangalore',
      locationDescription: 'Head Office - Floor 2',
      status: 'Active',
      statusDescription: 'In Use',
      quantity: 1,
      unit: 'Nos',
      assetCapitalizationDate: '2023-01-15',
      firstAcquisitionDate: '2023-01-15',
      component: 'Hardware',
      componentDescription: 'Computing Device',
      deactivationDate: '',
      inventoryDate: '2024-01-10',
      inventoryNote: 'Physical verification done',
      qrCode: 'QR-AST001',
      qrImage: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=AST-001',
      importedDate: '2023-01-20'
    },
    {
      mainAssetNumber: 'AST-002',
      subNumber: '0',
      assetClass: 'Furniture',
      assetDescription: 'Ergonomic Chair',
      additionalDescription: 'Black mesh office chair',
      custodianId: 'EMP002',
      custodianName: 'Jane Smith',
      custodianDept: 'HR',
      location: 'Bangalore',
      locationDescription: 'Head Office - Floor 3',
      status: 'Active',
      statusDescription: 'In Use',
      quantity: 1,
      unit: 'Nos',
      assetCapitalizationDate: '2023-05-20',
      firstAcquisitionDate: '2023-05-20',
      component: 'Office Equipment',
      componentDescription: 'Seating',
      deactivationDate: '',
      inventoryDate: '2024-01-12',
      inventoryNote: 'Good condition',
      qrCode: 'QR-AST002',
      qrImage: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=AST-002',
      importedDate: '2023-05-25'
    }
  ];

  ngOnInit(): void {
    // Data is already populated
  }

  generateQRCodes() {
    const selectedRows = this.table.getSelectedRows();
    if (selectedRows.length === 0) {
      alert('Please select at least one asset to generate and print QR codes.');
      return;
    }
    
    this.printQRCodes(selectedRows);
  }

  printQRCodes(assets: any[]) {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    let html = `
      <html>
        <head>
          <title>Print QR Codes</title>
          <style>
            body { font-family: sans-serif; display: flex; flex-wrap: wrap; gap: 20px; padding: 20px; }
            .qr-label { border: 1px solid #ccc; padding: 10px; border-radius: 8px; display: flex; align-items: center; gap: 10px; width: 200px; }
            .brand { writing-mode: vertical-rl; transform: rotate(180deg); font-weight: 900; font-size: 14px; border-left: 1px solid #eee; padding-left: 5px; }
            .qr-container { display: flex; flex-direction: column; align-items: center; }
            .qr-image { width: 80px; height: 80px; }
            .asset-no { font-size: 10px; font-weight: bold; margin-top: 5px; }
          </style>
        </head>
        <body>
    `;

    assets.forEach(asset => {
      const qrUrl = asset.qrImage || `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${asset.mainAssetNumber}`;
      html += `
        <div class="qr-label">
          <div class="brand">NRL</div>
          <div class="qr-container">
            <img src="${qrUrl}" class="qr-image" />
            <div class="asset-no">${asset.mainAssetNumber}</div>
          </div>
        </div>
      `;
    });

    html += `
        </body>
        <script>
          window.onload = () => {
            window.print();
            window.onafterprint = () => window.close();
          };
        </script>
      </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
  }

  exportPdf() {
    this.table.exportToPdf('Selected_Assets_QR_Codes');
  }
}
