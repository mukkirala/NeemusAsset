import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonCardComponent } from '../../../shared/components/common-card/common-card.component';
import { ButtonComponent } from '../../../shared/components/button/button';

@Component({
  selector: 'app-create-audit',
  standalone: true,
  imports: [CommonModule, FormsModule, CommonCardComponent, ButtonComponent],
  templateUrl: './create-audit.component.html',
  styleUrls: []
})
export class CreateAuditComponent implements OnInit {
  
  auditModel = {
    location: '',
    auditStatus: 'Pending',
    auditName: '',
    auditDescription: ''
  };

  locations = ['Head Office', 'Warehouse A', 'Data Center', 'Regional Office'];
  statuses = ['Pending', 'In Progress', 'Completed'];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  onSave() {
    console.log('Saving audit...', this.auditModel);
    // Navigate to the audit list page
    this.router.navigate(['/itadmin/AuditList']);
  }
}
