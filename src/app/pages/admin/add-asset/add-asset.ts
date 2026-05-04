import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AssetService } from '../../../core/services/asset.service';

@Component({
  selector: 'app-add-asset',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatIconModule
  ],
  templateUrl: './add-asset.html',
  styleUrl: './add-asset.css'
})
export class AddAssetComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private assetService = inject(AssetService);

  /** Show success banner after submit */
  submitted = false;

  basicInfoForm = this.fb.group({
    mainAssetNumber: ['', Validators.required],
    subNumber: ['00', Validators.required],
    custodianDept: ['', Validators.required],
    quantity: [1, [Validators.required, Validators.min(1)]],
    assetDescription: ['', Validators.required]
  });

  acquisitionForm = this.fb.group({
    acquisitionDate: ['', Validators.required],
    capitalizationDate: ['', Validators.required],
    unit: ['', Validators.required],
    custodianId: ['1500454', Validators.required]
  });

  locationForm = this.fb.group({
    location: ['', Validators.required],
    assetClass: ['', Validators.required],
    statusCode: ['Active', Validators.required],
    component: ['Main']
  });

  submit() {
    if (this.basicInfoForm.valid && this.acquisitionForm.valid && this.locationForm.valid) {
      const b = this.basicInfoForm.value;
      const a = this.acquisitionForm.value;
      const l = this.locationForm.value;

      const assetData = {
        mainAssetNumber:  b.mainAssetNumber  ?? '',
        subNumber:        b.subNumber        ?? '',
        custodianDept:    b.custodianDept    ?? '',
        quantity:         b.quantity         ?? 1,
        assetDescription: b.assetDescription ?? '',
        acquisitionDate:  a.acquisitionDate  ?? '',
        capitalizationDate: a.capitalizationDate ?? '',
        unit:             a.unit             ?? '',
        custodianId:      a.custodianId      ?? '',
        location:         l.location         ?? '',
        assetClass:       l.assetClass       ?? '',
        statusCode:       l.statusCode       ?? 'Active',
        component:        l.component        ?? 'Main',
      };

      this.assetService.addAsset(assetData).subscribe({
        next: () => {
          // Navigate to asset list on success
          this.router.navigate(['/dashboard/asset-list']);
        },
        error: (err) => {
          console.error('Failed to add asset', err);
          alert('Failed to save asset. Please check if the API is running.');
        }
      });
    }
  }

}
