import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule, ToolbarService, ExcelExportService, PdfExportService, PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-asset-mapping-list',
  standalone: true,
  imports: [CommonModule, GridModule, MatButtonModule, MatIconModule, MatTooltipModule],
  providers: [ToolbarService, ExcelExportService, PdfExportService, PageService, SortService, FilterService, GroupService],
  templateUrl: './asset-mapping-list.component.html',
  styleUrls: ['./asset-mapping-list.component.css']
})
export class AssetMappingListComponent implements OnInit {
  public data: any[] = [
    { role: 'Administrator', assetClass: 'Laptops', custodian: 'John Doe (EMP001)' },
    { role: 'Auditor', assetClass: 'Mobile Phones', custodian: 'Jane Smith (EMP002)' }
  ];

  public pageSettings = { pageSize: 10 };
  public toolbar = ['Search', 'ExcelExport', 'PdfExport'];

  ngOnInit(): void {}

  editMapping(data: any) {
    alert('Edit Mapping for: ' + data.assetClass);
  }

  deleteMapping(data: any) {
    if (confirm('Are you sure you want to delete this mapping?')) {
      this.data = this.data.filter(item => item !== data);
    }
  }
}
