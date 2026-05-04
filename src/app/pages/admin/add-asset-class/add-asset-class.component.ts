import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonCardComponent } from '../../../shared/components/common-card/common-card.component';

@Component({
  selector: 'app-add-asset-class',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    CommonCardComponent
  ],
  templateUrl: './add-asset-class.component.html',
  styleUrls: ['./add-asset-class.component.css']
})
export class AddAssetClassComponent {
  constructor(private router: Router) {}

  assetClass = {
    code: '',
    name: '',
    dept: ''
  };

  departments = [
    { value: 'IT', viewValue: 'IT Department' },
    { value: 'HR', viewValue: 'HR Department' },
    { value: 'FIN', viewValue: 'Finance' },
    { value: 'OPS', viewValue: 'Operations' }
  ];

  saveAssetClass() {
    if (this.assetClass.code && this.assetClass.name && this.assetClass.dept) {
      console.log('Saving asset class:', this.assetClass);
      alert('Asset Class added successfully!');
      this.assetClass = { code: '', name: '', dept: '' };
      this.router.navigate(['/admin/asset-class-list']);
    } else {
      alert('Please fill in all fields.');
    }
  }
}
