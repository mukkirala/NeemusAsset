import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonCardComponent } from '../../../shared/components/common-card/common-card.component';

@Component({
  selector: 'app-custodian-transfer',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonCardComponent
  ],
  templateUrl: './custodian-transfer.component.html',
  styleUrl: './custodian-transfer.component.css'
})
export class CustodianTransferComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  transferForm = this.fb.group({
    assetClass: ['', Validators.required],
    asset: ['', Validators.required],
    custodian: ['', Validators.required],
    comments: ['', Validators.required]
  });

  assetClasses = ['Electronics', 'Furniture', 'Vehicles', 'IT Equipment'];
  allocatedAssets = [
    { id: '1', name: 'Laptop - Dell Latitude (MA-1001)' },
    { id: '2', name: 'Monitor - 27 inch (MA-1002)' },
    { id: '3', name: 'Office Chair (MA-1005)' }
  ];
  employees = [
    { id: 'EMP201', name: 'Alice Brown' },
    { id: 'EMP202', name: 'Bob Wilson' },
    { id: 'EMP203', name: 'Charlie Davis' }
  ];

  onSubmit() {
    if (this.transferForm.valid) {
      console.log('Custodian Transfer Request Sent:', this.transferForm.value);
      this.router.navigate(['/user/custodian-transfer-history']);
    }
  }
}
