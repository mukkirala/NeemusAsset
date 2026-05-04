import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonCardComponent } from '../../../shared/components/common-card/common-card.component';
import { EmployeeService } from '../../../core/services/employee.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonCardComponent
  ],
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  constructor(private router: Router, private employeeService: EmployeeService) {}

  employee = {
    userId: '',
    username: '',
    emailId: ''
  };

  saveEmployee() {
    if (this.employee.userId && this.employee.username && this.employee.emailId) {
      console.log('Saving employee via API:', this.employee);
      this.employeeService.addEmployee(this.employee).subscribe({
        next: () => {
          alert('Employee added successfully!');
          // Reset form
          this.employee = { userId: '', username: '', emailId: '' };
          this.router.navigate(['/admin/employee-list']);
        },
        error: (err) => {
          console.error('Error saving employee:', err);
          alert('Failed to add employee. Please try again later.');
        }
      });
    } else {
      alert('Please fill in all fields.');
    }
  }
}
