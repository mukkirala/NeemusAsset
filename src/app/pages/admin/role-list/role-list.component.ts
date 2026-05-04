import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule, ToolbarService, ExcelExportService, PdfExportService, PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-role-list',
  standalone: true,
  imports: [CommonModule, GridModule, MatButtonModule, MatIconModule, MatTooltipModule],
  providers: [ToolbarService, ExcelExportService, PdfExportService, PageService, SortService, FilterService, GroupService],
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  public data: any[] = [
    { roleId: 'RL001', roleName: 'Super Admin', custId: 'EMP001', createdDate: '2026-04-24', status: 'Active' },
    { roleId: 'RL002', roleName: 'IT Admin', custId: 'EMP102', createdDate: '2026-04-23', status: 'Active' },
    { roleId: 'RL003', roleName: 'Auditor', custId: 'EMP305', createdDate: '2026-04-22', status: 'Inactive' }
  ];

  public pageSettings = { pageSize: 10 };
  public toolbar = ['Search', 'ExcelExport', 'PdfExport'];

  ngOnInit(): void {}

  editRole(data: any) {
    console.log('Editing role:', data);
    alert('Edit Role: ' + data.roleId);
  }

  deleteRole(data: any) {
    if (confirm('Are you sure you want to delete this role mapping?')) {
      this.data = this.data.filter(item => item.roleId !== data.roleId);
    }
  }
}
