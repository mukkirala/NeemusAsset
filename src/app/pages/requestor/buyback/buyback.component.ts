import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonCardComponent } from '../../../shared/components/common-card/common-card.component';

@Component({
  selector: 'app-buyback',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonCardComponent
  ],
  templateUrl: './buyback.component.html',
  styleUrl: './buyback.component.css'
})
export class BuybackComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  buybackForm = this.fb.group({
    asset: ['', Validators.required],
    comments: ['', Validators.required]
  });

  allocatedAssets = [
    { id: '1', name: 'Laptop - Dell Latitude (MA-1001)' },
    { id: '2', name: 'Monitor - 27 inch (MA-1002)' },
    { id: '3', name: 'Office Chair (MA-1005)' }
  ];

  onSubmit() {
    if (this.buybackForm.valid) {
      console.log('Buyback Request Sent:', this.buybackForm.value);
      this.router.navigate(['/user/buyback-history']);
    }
  }
}
