import { Component, inject, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
  templateUrl: './navbar.html'
})
export class NavbarComponent {
  private authService = inject(AuthService);

  @ViewChild('profileMenu') profileMenuRef!: ElementRef;

  profileOpen = false;
  userInitials = 'AD';

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.profileOpen && this.profileMenuRef && !this.profileMenuRef.nativeElement.contains(event.target)) {
      this.profileOpen = false;
    }
  }

  onToggleSidebar() {
    window.dispatchEvent(new CustomEvent('toggle-sidebar'));
  }

  toggleProfile() {
    this.profileOpen = !this.profileOpen;
  }

  logout() {
    this.authService.logout();
  }
}
