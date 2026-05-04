import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonCardComponent } from '../../../shared/components/common-card/common-card.component';

@Component({
  selector: 'app-request-asset',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonCardComponent
  ],
  templateUrl: './request-asset.component.html',
  styleUrl: './request-asset.component.css'
})
export class RequestAssetComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  requestForm = this.fb.group({
    assetClass: ['', Validators.required],
    asset: ['', Validators.required],
    location: ['', Validators.required],
    quantity: [1, [Validators.required, Validators.min(1)]]
  });

  assetClasses = ['Electronics', 'Furniture', 'Vehicles', 'IT Equipment'];
  assets = ['Laptop', 'Desktop', 'Monitor', 'Keyboard', 'Mouse', 'Office Chair', 'Desk'];

  onSubmit() {
    if (this.requestForm.valid) {
      console.log('Request Sent:', this.requestForm.value);
      this.router.navigate(['/user/view-asset-requests']);
    }
  }
}
