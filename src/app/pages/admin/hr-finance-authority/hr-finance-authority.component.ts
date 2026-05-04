import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonCardComponent } from '../../../shared/components/common-card/common-card.component';

@Component({
  selector: 'app-hr-finance-authority',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    CommonCardComponent
  ],
  templateUrl: './hr-finance-authority.component.html',
  styleUrls: ['./hr-finance-authority.component.css']
})
export class HrFinanceAuthorityComponent {
  constructor(private router: Router) {}

  authority = {
    dept: '',
    empId: ''
  };

  departments = [
    { value: 'HR', viewValue: 'HR Department' },
    { value: 'FIN', viewValue: 'Finance Department' }
  ];

  employees = [
    { id: 'EMP001', name: 'John Doe' },
    { id: 'EMP002', name: 'Jane Smith' },
    { id: 'EMP005', name: 'Robert Brown' }
  ];

  saveAuthority() {
    if (this.authority.dept && this.authority.empId) {
      console.log('Saving HR/Finance authority:', this.authority);
      alert('HR/Finance Authority assigned successfully!');
      this.router.navigate(['/admin/hr-finance-list']);
    } else {
      alert('Please select both Department and Employee.');
    }
  }
}
