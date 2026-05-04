import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [class]="buttonClasses"
      [disabled]="disabled"
      (click)="!disabled && btnClick.emit($event)">
      {{ label }}
    </button>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() variant: 'primary' | 'dark' = 'primary';
  @Input() disabled: boolean = false;
  @Output() btnClick = new EventEmitter<MouseEvent>();

  get buttonClasses(): string {
    const base = 'w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 text-sm tracking-wide ';
    
    if (this.disabled) {
      return base + 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-100 opacity-60';
    }

    const variants = {
      primary: 'bg-gradient-to-r from-[var(--btn-gradient-start)] to-[var(--btn-gradient-end)] text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] transform hover:-translate-y-0.5 active:scale-95',
      dark: 'bg-gradient-to-b from-[var(--btn-dark-start)] to-[var(--btn-dark-end)] text-[var(--text-main)] border border-[var(--border-card)]'
    };
    return base + variants[this.variant];
  }
}
