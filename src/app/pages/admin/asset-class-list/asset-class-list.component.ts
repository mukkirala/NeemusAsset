import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule, ToolbarService, ExcelExportService, PdfExportService, PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-asset-class-list',
  standalone: true,
  imports: [CommonModule, GridModule, MatButtonModule, MatIconModule, MatTooltipModule],
  providers: [ToolbarService, ExcelExportService, PdfExportService, PageService, SortService, FilterService, GroupService],
  templateUrl: './asset-class-list.component.html',
  styleUrls: ['./asset-class-list.component.css']
})
export class AssetClassListComponent implements OnInit {
  public data: any[] = [
    { assetClassCode: 'LAP', assetClassName: 'Laptops', deptName: 'IT Department' },
    { assetClassCode: 'MOB', assetClassName: 'Mobile Phones', deptName: 'IT Department' },
    { assetClassCode: 'FUR', assetClassName: 'Furniture', deptName: 'HR Department' }
  ];

  public pageSettings = { pageSize: 10 };
  public toolbar = ['Search', 'ExcelExport', 'PdfExport'];

  ngOnInit(): void {}

  editAssetClass(data: any) {
    alert('Edit Asset Class: ' + data.assetClassCode);
  }

  deleteAssetClass(data: any) {
    if (confirm('Are you sure you want to delete this asset class?')) {
      this.data = this.data.filter(item => item.assetClassCode !== data.assetClassCode);
    }
  }
}
