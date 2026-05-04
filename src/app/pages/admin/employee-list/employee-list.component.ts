import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule, ToolbarService, ExcelExportService, PdfExportService, PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, GridModule, MatButtonModule, MatIconModule, MatTooltipModule],
  providers: [ToolbarService, ExcelExportService, PdfExportService, PageService, SortService, FilterService, GroupService],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public data: any[] = [
    { userId: 'EMP001', username: 'Ashok Kumar Sharma', email: 'ashok.sharma@nrl.co.in' },
    { userId: 'EMP002', username: 'Gaurab Das', email: 'gaurab.das@nrl.co.in' },
    { userId: 'EMP003', username: 'Gauri Duarah', email: 'gauri.duarah@nrl.co.in' }
  ];

  public pageSettings = { pageSize: 10 };
  public toolbar = ['Search', 'ExcelExport', 'PdfExport'];

  ngOnInit(): void {}

  editEmployee(data: any) {
    alert('Edit Employee: ' + data.userId);
  }

  deleteEmployee(data: any) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.data = this.data.filter(item => item.userId !== data.userId);
    }
  }
}
