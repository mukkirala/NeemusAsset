import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  GridModule, 
  FilterService, 
  SortService, 
  PageService, 
  GroupService,
  ToolbarService,
  ExcelExportService,
  PdfExportService,
  GridComponent,
  ResizeService,
  SelectionService
} from '@syncfusion/ej2-angular-grids';
import { CommonCardComponent } from '../../../shared/components/common-card/common-card.component';
import { ButtonComponent } from '../../../shared/components/button/button';

@Component({
  selector: 'app-qr-code-manager',
  standalone: true,
  imports: [CommonModule, FormsModule, GridModule, CommonCardComponent, ButtonComponent],
  providers: [FilterService, SortService, PageService, GroupService, ToolbarService, ExcelExportService, PdfExportService, ResizeService, SelectionService],
  templateUrl: './qr-code-manager.component.html',
  styleUrls: []
})
export class QrCodeManagerComponent implements OnInit {
  @ViewChild('grid') public grid!: GridComponent;
  
  toolbarOptions: string[] = ['Search', 'ExcelExport', 'PdfExport'];
  filterType: string = 'Double Sticker';

  public rawData: any[] = [
    { 
      mainAssetNo: '60050011', subNo: '0', assetClass: '6005', assetDesc: 'HP M5025 Printer', addDesc: 'Additional description',
      custId: '150316', custName: 'John Doe', custDept: 'IT', location: 'FIELD OFFICE', locDesc: 'Field Office 1',
      status: 'Asset Available', statusDesc: 'Ready to use', quantity: 1, unit: 'PC', assetCapDate: '01-Jan-2023',
      componentDesc: 'Printer component', deactivation: '', inventoryDate: '01-Dec-2023', inventoryNote: 'Checked ok',
      qrcode: 'QR123456', qrimage: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=60050011', importedDate: '10-Feb-2023'
    },
    { 
      mainAssetNo: '60050012', subNo: '1', assetClass: '6005', assetDesc: 'Scanner XYZ', addDesc: 'Scanner test',
      custId: '100528', custName: 'Jane Smith', custDept: 'Admin', location: 'CISF', locDesc: 'CISF Block',
      status: 'Asset Damaged but Repairable', statusDesc: 'Needs minor repair', quantity: 1, unit: 'PC', assetCapDate: '15-Mar-2022',
      componentDesc: 'Scanner part', deactivation: '', inventoryDate: '15-Nov-2023', inventoryNote: 'Scanner glass broken',
      qrcode: 'QR123457', qrimage: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=60050012', importedDate: '20-Mar-2022'
    }
  ];

  public assetData: any[] = [];

  ngOnInit(): void {
    this.assetData = [...this.rawData];
  }

  toolbarClick(args: any): void {
    if (args.item.id.includes('excelexport')) {
      this.grid.excelExport();
    } else if (args.item.id.includes('pdfexport')) {
      this.grid.pdfExport();
    }
  }

  onFilterChange() {
    console.log('QR Code Filter changed to:', this.filterType);
    this.assetData = [...this.rawData];
  }

  onPrint() {
    const selectedRecords = this.grid.getSelectedRecords();
    if (selectedRecords.length === 0) {
      alert('Please select at least one asset to print.');
      return;
    }
    console.log('Printing QR codes for selected records:', selectedRecords);
    console.log('Mode:', this.filterType);
  }
}
