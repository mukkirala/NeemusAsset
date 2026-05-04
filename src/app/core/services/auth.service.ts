import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);

  private userRoleSubject = new BehaviorSubject<string | null>('Admin'); // Default to Admin for demo
  userRole$ = this.userRoleSubject.asObservable();

  logout() {
    console.log('Logging out...');
    this.userRoleSubject.next(null);
    this.router.navigate(['/login']);
  }

  setRole(role: string) {
    this.userRoleSubject.next(role);
  }
}
