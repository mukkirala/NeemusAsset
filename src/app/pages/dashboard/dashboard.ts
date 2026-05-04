import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="space-y-8 animate-[fadeIn_0.5s_ease-out]">
      <!-- Header -->
      <header class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 class="text-[var(--font-size-h1)] font-[var(--font-weight-bold)] tracking-tight">System Overview</h1>
          <p class="text-[var(--text-muted)] mt-1">Manage and track your organization's assets in real-time.</p>
        </div>
        <div class="flex items-center gap-3">
          <button class="flex items-center gap-2 px-4 py-2 bg-white border border-[var(--border-card)] rounded-xl text-[var(--text-main)] font-[var(--font-weight-semibold)] hover:bg-gray-50 transition-all shadow-sm">
            <mat-icon class="text-[var(--text-muted)]">download</mat-icon>
            Export Report
          </button>
          <button class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--btn-gradient-start)] to-[var(--btn-gradient-end)] text-white rounded-xl font-[var(--font-weight-semibold)] hover:opacity-90 transition-all shadow-md">
            <mat-icon>add</mat-icon>
            New Asset
          </button>
        </div>
      </header>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div *ngFor="let stat of stats" class="p-6 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-[24px] shadow-[var(--shadow-card)] group hover:-translate-y-1 transition-all duration-300">
          <div class="flex items-center justify-between mb-4">
            <div [class]="'w-12 h-12 rounded-2xl flex items-center justify-center ' + stat.colorBg">
              <mat-icon [class]="stat.colorText">{{ stat.icon }}</mat-icon>
            </div>
            <span [class]="'text-xs font-bold px-2 py-1 rounded-lg ' + stat.trendBg + ' ' + stat.trendText">
              {{ stat.trend }}
            </span>
          </div>
          <p class="text-[var(--text-muted)] text-[var(--font-size-small)] font-bold tracking-widest uppercase">{{ stat.label }}</p>
          <p class="text-3xl font-bold mt-1">{{ stat.value }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Activity Chart Placeholder -->
        <div class="lg:col-span-2 p-8 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-[32px] shadow-[var(--shadow-card)]">
          <div class="flex items-center justify-between mb-8">
            <h3 class="text-xl font-bold">Asset Performance</h3>
            <select class="bg-transparent border border-[var(--border-card)] rounded-lg px-3 py-1 text-sm outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div class="h-64 flex flex-col items-center justify-center bg-gray-50/50 rounded-2xl border-2 border-dashed border-gray-100">
            <mat-icon class="text-gray-300 text-5xl mb-2">insert_chart</mat-icon>
            <p class="text-[var(--text-muted)]">Performance visualization will be rendered here</p>
          </div>
        </div>

        <!-- Recent Requests -->
        <div class="p-8 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-[32px] shadow-[var(--shadow-card)]">
          <h3 class="text-xl font-bold mb-6">Recent Requests</h3>
          <div class="space-y-6">
            <div *ngFor="let req of recentRequests" class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold">
                {{ req.initials }}
              </div>
              <div class="flex-1">
                <p class="text-sm font-bold">{{ req.user }}</p>
                <p class="text-xs text-[var(--text-muted)]">{{ req.item }}</p>
              </div>
              <span [class]="'text-[10px] font-bold px-2 py-1 rounded-md ' + req.statusBg + ' ' + req.statusText">
                {{ req.status }}
              </span>
            </div>
          </div>
          <button class="w-full mt-8 py-3 text-sm font-bold text-[var(--color-accent)] hover:bg-sky-50 rounded-xl transition-all">
            View All Requests
          </button>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent {
  stats = [
    { label: 'Total Assets', value: '1,284', icon: 'inventory_2', colorBg: 'bg-blue-50', colorText: 'text-blue-500', trend: '+12%', trendBg: 'bg-emerald-50', trendText: 'text-emerald-600' },
    { label: 'Pending', value: '42', icon: 'schedule', colorBg: 'bg-amber-50', colorText: 'text-amber-500', trend: '-2%', trendBg: 'bg-red-50', trendText: 'text-red-600' },
    { label: 'Deployed', value: '1,120', icon: 'task_alt', colorBg: 'bg-emerald-50', colorText: 'text-emerald-500', trend: '+5%', trendBg: 'bg-emerald-50', trendText: 'text-emerald-600' },
    { label: 'Maintenance', value: '24', icon: 'build', colorBg: 'bg-purple-50', colorText: 'text-purple-500', trend: '+8%', trendBg: 'bg-amber-50', trendText: 'text-amber-600' }
  ];

  recentRequests = [
    { user: 'Sarah Connor', item: 'MacBook Pro M3', initials: 'SC', status: 'Pending', statusBg: 'bg-amber-50', statusText: 'text-amber-600' },
    { user: 'John Doe', item: 'Dell XPS 15', initials: 'JD', status: 'Approved', statusBg: 'bg-emerald-50', statusText: 'text-emerald-600' },
    { user: 'Mike Ross', item: 'Logitech MX Master', initials: 'MR', status: 'Rejected', statusBg: 'bg-red-50', statusText: 'text-red-600' },
    { user: 'Rachel Zane', item: 'iPad Pro 12.9', initials: 'RZ', status: 'Pending', statusBg: 'bg-amber-50', statusText: 'text-amber-600' }
  ];
}
