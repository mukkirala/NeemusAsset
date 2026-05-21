import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { BASE_URL } from '../../../core/Constant/apiConstant';
import {
  GridModule,
  GridComponent,
  ToolbarService,
  PageService,
  SortService,
  FilterService,
  PageSettingsModel,
  FilterSettingsModel,
  ExcelExportService,
  PdfExportService,
  GroupService,
  ColumnChooserService,
  ResizeService,
  ReorderService
} from '@syncfusion/ej2-angular-grids';

const URL = BASE_URL;
const headers = new HttpHeaders();

@Component({
  selector: 'app-audit-list',
  standalone: true,
  imports: [CommonModule, FormsModule, GridModule],
  providers: [
    ToolbarService,
    PageService,
    SortService,
    FilterService,
    ExcelExportService,
    PdfExportService,
    GroupService,
    ColumnChooserService,
    ResizeService,
    ReorderService
  ],
  templateUrl: './audit-list.component.html',
  styleUrls: ['./audit-list.component.css']
})
export class AuditListComponent implements OnInit {
  @ViewChild('grid') public grid!: GridComponent;

  filterType: string = 'All';
  isLoading: boolean = false;

  public locationData: any[] = [];
  public rawData: any[] = [];
  public auditData: any[] = [];

  public pageSettings: PageSettingsModel = { pageSize: 10, pageSizes: true };
  public toolbar: string[] = ['Search', 'ExcelExport', 'PdfExport', 'ColumnChooser'];
  public filterSettings: FilterSettingsModel = { type: 'Excel' };
  public groupSettings: any = { showGroupedColumn: true };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoading = true;

    forkJoin({
      audits: this.http.get<any[]>(URL + '/AuditDetails', { headers }),
      locations: this.http.get<any[]>(URL + '/LocationDetails', { headers })
    }).subscribe({
      next: ({ audits, locations }) => {
        this.locationData = locations || [];
        this.rawData = this.mapAudits(audits || []);
        this.isLoading = false;
        setTimeout(() => this.applyFilter(), 0);
      },
      error: (err) => {
        console.error('Error loading audit list:', err);
        this.isLoading = false;
      }
    });
  }

  private mapAudits(audits: any[]): any[] {
    return audits.map(a => {
      const loc = this.locationData.find(x => x.locationID === Number(a.locationID));
      return {
        ...a,
        createdBy: (a.auditBy ?? a.createdBy ?? '').toString().trim(),
        location: (loc?.location ?? a.location ?? '').trim(),
        locationCode: (loc?.locationCode ?? a.locationCode ?? '').trim(),
        auditDateDisplay: this.formatDate(a.auditDate)
      };
    });
  }

  formatDate(value: any): string {
    if (!value) return '';
    const d = new Date(value);
    if (isNaN(d.getTime())) return value.toString();
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  onFilterChange(): void {
    this.applyFilter();
  }

  applyFilter(): void {
    if (
      this.filterType !== 'LocationWise' &&
      this.grid?.groupSettings?.columns?.length
    ) {
      this.grid.clearGrouping();
    }

    switch (this.filterType) {
      case 'All':
        this.auditData = [...this.rawData];
        break;

      case 'Current':
        this.auditData = this.rawData.filter(a => {
          const s = (a.auditStatus ?? '').trim().toLowerCase();
          return s === 'active' || s === 'in progress' || s === 'open';
        });
        break;

      case 'Pending':
        this.auditData = this.rawData.filter(a =>
          (a.auditStatus ?? '').trim().toLowerCase() === 'pending'
        );
        break;

      case 'Completed':
        this.auditData = this.rawData.filter(a => {
          const auditStatus = (a.auditStatus ?? '').trim().toLowerCase();
          const status = (a.status ?? '').trim().toLowerCase();
          return auditStatus === 'completed' || status === 'completed';
        });
        break;

      case 'Approved':
        this.auditData = this.rawData.filter(a =>
          (a.auditStatus ?? '').trim().toLowerCase() === 'approved'
        );
        break;

      case 'LocationWise':
        this.auditData = [...this.rawData];
        setTimeout(() => {
          if (this.grid) {
            this.grid.groupColumn('location');
          }
        }, 100);
        break;

      default:
        this.auditData = [...this.rawData];
    }

    if (this.grid) {
      this.grid.dataSource = this.auditData;
      this.grid.refresh();
    }
  }

  toolbarClick(args: any): void {
    if (args.item.id.includes('excelexport')) {
      this.grid.excelExport();
    } else if (args.item.id.includes('pdfexport')) {
      this.grid.pdfExport();
    }
  }
}
