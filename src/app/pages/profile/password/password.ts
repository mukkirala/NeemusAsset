import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, MatIconModule],
  templateUrl: './password.html'
})
export class PasswordComponent {
  private dialogRef = inject(MatDialogRef<PasswordComponent>);

  passwords = {
    current: '',
    new: '',
    confirm: ''
  };

  showPasswords = {
    current: false,
    new: false,
    confirm: false
  };

  onClose() {
    this.dialogRef.close();
  }

  onSave() {
    if (this.passwords.new !== this.passwords.confirm) {
      alert("Passwords don't match! ❌");
      return;
    }
    
    // In a real app, call an API here
    alert("Password updated successfully! ✅");
    this.dialogRef.close(true);
  }

  toggleVisibility(field: 'current' | 'new' | 'confirm') {
    this.showPasswords[field] = !this.showPasswords[field];
  }
}
