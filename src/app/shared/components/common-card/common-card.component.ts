import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-common-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    ButtonComponent
  ],
  templateUrl: './common-card.component.html',
  styleUrls: ['./common-card.component.css']
})
export class CommonCardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() buttonLabel: string = '';
  @Input() buttonIcon: string = '';
  @Input() buttonVariant: 'primary' | 'dark' | 'green' = 'primary';
  @Input() icon: string = 'arrow_forward';
  @Input() disabled: boolean = false;
  @Input() isFixed: boolean = false;
  @Output() onAction = new EventEmitter<void>();

  handleAction() {
    if (!this.disabled) {
      this.onAction.emit();
    }
  }
}
