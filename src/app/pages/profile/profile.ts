import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PasswordComponent } from './password/password';
import { AuthService } from '../../core/services/auth.service';
import { ButtonComponent } from '../../shared/components/button/button';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, MatIconModule, ButtonComponent],
  templateUrl: './profile.html'
})
export class ProfileComponent implements OnInit {
  private dialog = inject(MatDialog);
  private authService = inject(AuthService);

  isEditing = false;
  user = 'User';
  role = 'Role';
  email = '';

  profileData = {
    firstName: '',
    lastName: 'Solutions',
    employer: 'Neemus Software Solutions',
    employeeId: 'EMP001',
    country: 'India',
    state: 'Telangana',
    city: 'Hyderabad',
    email: '',
    role: ''
  };

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    // Get role from AuthService instead of localStorage directly for consistency
    this.authService.userRole$.subscribe(role => {
      this.role = role || 'Admin';
      this.user = role || 'Admin';
      this.profileData.firstName = this.user;
      this.profileData.role = this.role;
    });

    this.email = localStorage.getItem('email') || `${this.user.toLowerCase()}@neemus.com`;
    this.profileData.email = this.email;
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  saveChanges() {
    localStorage.setItem('email', this.email);
    this.profileData.email = this.email;
    this.isEditing = false;
    // You could replace this alert with a modern Snackbar if desired
    alert("Profile updated successfully! ✅");
  }

  openChangePassword() {
    this.dialog.open(PasswordComponent, {
      width: '800px',
      maxWidth: '95vw',
      panelClass: 'custom-dialog-container',
      // Adding a subtle backdrop blur
      backdropClass: 'backdrop-blur-sm'
    });
  }
}
