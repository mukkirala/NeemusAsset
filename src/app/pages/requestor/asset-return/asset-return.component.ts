import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonCardComponent } from '../../../shared/components/common-card/common-card.component';

@Component({
  selector: 'app-asset-return',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonCardComponent
  ],
  templateUrl: './asset-return.component.html',
  styleUrl: './asset-return.component.css'
})
export class AssetReturnComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  returnForm = this.fb.group({
    assetClass: ['', Validators.required],
    asset: ['', Validators.required],
    comments: ['', Validators.required]
  });

  assetClasses = ['Electronics', 'Furniture', 'Vehicles', 'IT Equipment'];
  allocatedAssets = [
    { id: '1', name: 'Laptop - Dell Latitude (MA-1001)' },
    { id: '2', name: 'Monitor - 27 inch (MA-1002)' },
    { id: '3', name: 'Office Chair (MA-1005)' }
  ];

  onSubmit() {
    if (this.returnForm.valid) {
      console.log('Asset Return Request Sent:', this.returnForm.value);
      this.router.navigate(['/user/asset-return-history']);
    }
  }
}
