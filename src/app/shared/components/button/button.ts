import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <button
      [class]="buttonClasses"
      [disabled]="disabled"
      (click)="!disabled && btnClick.emit($event)"
      class="flex items-center justify-center gap-2">
      <mat-icon *ngIf="icon && iconPosition === 'left'" class="text-lg">{{ icon }}</mat-icon>
      <span>{{ label }}</span>
      <mat-icon *ngIf="icon && iconPosition === 'right'" class="text-lg">{{ icon }}</mat-icon>
    </button>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
    :host(.full-width) {
      display: block;
      width: 100%;
    }
  `],
  host: {
    '[class.full-width]': 'width === "full"'
  }
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() variant: 'primary' | 'dark' | 'green' | 'danger' | 'light' | 'ash' = 'primary';
  @Input() width: 'full' | 'auto' = 'full';
  @Input() icon: string = '';
  @Input() iconPosition: 'left' | 'right' = 'right';
  @Input() disabled: boolean = false;
  @Output() btnClick = new EventEmitter<MouseEvent>();

  get buttonClasses(): string {
    const widthClass = this.width === 'full' ? 'w-full' : 'w-auto px-10';
    const base = `${widthClass} py-3 rounded-xl font-semibold transition-all duration-300 text-sm tracking-wide `;
    
    if (this.disabled) {
      return base + 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-100 opacity-60';
    }

    const variants = {
      primary: 'bg-gradient-to-r from-[var(--btn-gradient-start)] to-[var(--btn-gradient-end)] text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] transform hover:-translate-y-0.5 active:scale-95',
      green: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transform hover:-translate-y-0.5 active:scale-95',
      danger: 'bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] hover:shadow-[0_0_25px_rgba(244,63,94,0.5)] transform hover:-translate-y-0.5 active:scale-95',
      dark: 'bg-gradient-to-b from-[var(--btn-dark-start)] to-[var(--btn-dark-end)] text-white border border-[var(--border-card)] shadow-sm hover:bg-slate-50 transition-colors',
      light: 'bg-slate-100 hover:bg-slate-200 text-slate-700 shadow-none',
      ash: 'bg-gradient-to-r from-slate-400 to-slate-500 text-white shadow-[0_0_20px_rgba(100,116,139,0.3)] hover:shadow-[0_0_25px_rgba(100,116,139,0.5)] transform hover:-translate-y-0.5 active:scale-95'
    };
    return base + (variants[this.variant] || variants.primary);
  }
}
