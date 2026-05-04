import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonCardComponent } from '../../../shared/components/common-card/common-card.component';

@Component({
  selector: 'app-location-transfer',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonCardComponent
  ],
  templateUrl: './location-transfer.component.html',
  styleUrl: './location-transfer.component.css'
})
export class LocationTransferComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  transferForm = this.fb.group({
    assetClass: ['', Validators.required],
    asset: ['', Validators.required],
    toLocation: ['', Validators.required],
    comments: ['', Validators.required]
  });

  assetClasses = ['Electronics', 'Furniture', 'Vehicles', 'IT Equipment'];
  allocatedAssets = [
    { id: '1', name: 'Laptop - Dell Latitude (MA-1001)' },
    { id: '2', name: 'Monitor - 27 inch (MA-1002)' },
    { id: '3', name: 'Office Chair (MA-1005)' }
  ];
  locations = ['Bangalore', 'Chennai', 'Mumbai', 'Delhi', 'Hyderabad'];

  onSubmit() {
    if (this.transferForm.valid) {
      console.log('Location Transfer Request Sent:', this.transferForm.value);
      this.router.navigate(['/user/location-transfer-history']);
    }
  }
}
