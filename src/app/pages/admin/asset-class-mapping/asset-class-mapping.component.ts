import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonCardComponent } from '../../../shared/components/common-card/common-card.component';

@Component({
  selector: 'app-asset-class-mapping',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    CommonCardComponent
  ],
  templateUrl: './asset-class-mapping.component.html',
  styleUrls: ['./asset-class-mapping.component.css']
})
export class AssetClassMappingComponent {
  constructor(private router: Router) {}

  mapping = {
    role: '',
    assetClass: '',
    custodian: ''
  };

  roles = [
    { value: 'admin', viewValue: 'Administrator' },
    { value: 'auditor', viewValue: 'Auditor' },
    { value: 'approver', viewValue: 'Approver' }
  ];

  assetClasses = [
    { value: 'LAP', viewValue: 'Laptops' },
    { value: 'MOB', viewValue: 'Mobile Phones' },
    { value: 'FUR', viewValue: 'Furniture' }
  ];

  employees = [
    { id: 'EMP001', name: 'John Doe' },
    { id: 'EMP002', name: 'Jane Smith' }
  ];

  saveMapping() {
    if (this.mapping.role && this.mapping.assetClass && this.mapping.custodian) {
      console.log('Saving mapping:', this.mapping);
      alert('Asset Class Mapping saved successfully!');
      this.router.navigate(['/admin/asset-mapping-list']);
    } else {
      alert('Please select all required fields.');
    }
  }
}
