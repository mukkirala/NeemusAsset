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
  ResizeService
} from '@syncfusion/ej2-angular-grids';
import { CommonCardComponent } from '../../../shared/components/common-card/common-card.component';

@Component({
  selector: 'app-asset-reports',
  standalone: true,
  imports: [CommonModule, FormsModule, GridModule, CommonCardComponent],
  providers: [FilterService, SortService, PageService, GroupService, ToolbarService, ExcelExportService, PdfExportService, ResizeService],
  templateUrl: './asset-reports.component.html',
  styleUrls: []
})
export class AssetReportsComponent implements OnInit {
  @ViewChild('grid') public grid!: GridComponent;
  
  toolbarOptions: string[] = ['Search', 'ExcelExport', 'PdfExport'];
  filterType: string = 'All';

  public rawData: any[] = [
    { 
      mainAssetNo: '60050011', subNo: '0', assetClass: '6005', assetDesc: 'HP M5025 Printer', addDesc: 'Additional description',
      custId: '150316', custName: 'John Doe', custDept: 'IT', location: 'FIELD OFFICE', locDesc: 'Field Office 1',
      status: 'Asset Available', statusDesc: 'Ready to use', quantity: 1, unit: 'PC', assetCapDate: '01-Jan-2023',
      componentDesc: 'Printer component', deactivation: '', inventoryDate: '01-Dec-2023', inventoryNote: 'Checked ok',
      qrcode: 'QR123456', qrimage: 'qr_link', importedDate: '10-Feb-2023'
    },
    { 
      mainAssetNo: '60050012', subNo: '1', assetClass: '6005', assetDesc: 'Scanner XYZ', addDesc: 'Scanner test',
      custId: '100528', custName: 'Jane Smith', custDept: 'Admin', location: 'CISF', locDesc: 'CISF Block',
      status: 'Asset Damaged but Repairable', statusDesc: 'Needs minor repair', quantity: 1, unit: 'PC', assetCapDate: '15-Mar-2022',
      componentDesc: 'Scanner part', deactivation: '', inventoryDate: '15-Nov-2023', inventoryNote: 'Scanner glass broken',
      qrcode: 'QR123457', qrimage: 'qr_link', importedDate: '20-Mar-2022'
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
    if (this.filterType === 'All') {
      this.assetData = [...this.rawData];
    } else if (this.filterType === 'Available') {
      this.assetData = this.rawData.filter(a => a.status === 'Asset Available');
    } else if (this.filterType === 'DamagedRepairable') {
      this.assetData = this.rawData.filter(a => a.status === 'Asset Damaged but Repairable');
    } else if (this.filterType === 'Deactivated') {
      this.assetData = this.rawData.filter(a => a.status === 'Deactivated');
    } else if (this.filterType === 'AvailableButDamaged') {
      this.assetData = this.rawData.filter(a => a.status === 'Asset Avbl but Damaged');
    } else if (this.filterType === 'LocationTransferred') {
      this.assetData = this.rawData.filter(a => a.status === 'Asset Location Transferred');
    }
  }
}
