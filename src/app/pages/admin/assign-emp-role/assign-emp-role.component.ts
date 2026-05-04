import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonCardComponent } from '../../../shared/components/common-card/common-card.component';

@Component({
  selector: 'app-assign-emp-role',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    CommonCardComponent
  ],
  templateUrl: './assign-emp-role.component.html',
  styleUrls: ['./assign-emp-role.component.css']
})
export class AssignEmpRoleComponent {
  selectedRole: string = '';
  selectedCustodian: string = '';

  constructor(private router: Router) {}

  roles = [
    { value: 'admin', viewValue: 'Administrator' },
    { value: 'manager', viewValue: 'Manager' },
    { value: 'custodian', viewValue: 'Custodian' },
    { value: 'requester', viewValue: 'Requester' }
  ];

  employees = [
    { id: 'EMP001', name: 'John Doe' },
    { id: 'EMP002', name: 'Jane Smith' },
    { id: 'EMP003', name: 'Michael Johnson' },
    { id: 'EMP004', name: 'Sarah Williams' }
  ];

  saveAssignment() {
    if (this.selectedRole && this.selectedCustodian) {
      console.log('Saving assignment:', {
        role: this.selectedRole,
        custodian: this.selectedCustodian
      });
      // Implementation for saving would go here
      alert('Role and Custodian assigned successfully!');
      this.router.navigate(['/admin/role-list']);
    } else {
      alert('Please select both Role and Custodian.');
    }
  }
}
