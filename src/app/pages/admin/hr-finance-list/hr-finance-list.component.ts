import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule, ToolbarService, ExcelExportService, PdfExportService, PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-hr-finance-list',
  standalone: true,
  imports: [CommonModule, GridModule, MatButtonModule, MatIconModule, MatTooltipModule],
  providers: [ToolbarService, ExcelExportService, PdfExportService, PageService, SortService, FilterService, GroupService],
  templateUrl: './hr-finance-list.component.html',
  styleUrls: ['./hr-finance-list.component.css']
})
export class HrFinanceListComponent implements OnInit {
  public data: any[] = [
    { dept: 'HR Department', empId: 'EMP001' },
    { dept: 'Finance Department', empId: 'EMP005' }
  ];

  public pageSettings = { pageSize: 10 };
  public toolbar = ['Search', 'ExcelExport', 'PdfExport'];

  ngOnInit(): void {}

  editAuthority(data: any) {
    alert('Edit Authority for: ' + data.dept);
  }

  deleteAuthority(data: any) {
    if (confirm('Are you sure you want to delete this authority assignment?')) {
      this.data = this.data.filter(item => item !== data);
    }
  }
}
