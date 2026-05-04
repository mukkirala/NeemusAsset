import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface Employee {
  userId: string;
  username: string;
  emailId: string;
}

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private http = inject(HttpClient);
  // Assuming the API URL follows the same pattern as asset.service.ts
  private apiUrl = 'http://localhost:5118/api/employees'; 

  private _employees$ = new BehaviorSubject<Employee[]>([]);
  /** Observable list of all employees */
  readonly employees$ = this._employees$.asObservable();

  constructor() {
    this.refreshEmployees();
  }

  /** Fetch latest employees from API */
  refreshEmployees(): void {
    this.http.get<Employee[]>(this.apiUrl).subscribe({
      next: (employees) => this._employees$.next(employees),
      error: (err) => console.error('Failed to load employees from API', err)
    });
  }

  /** Add a new employee via API */
  addEmployee(data: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, data).pipe(
      tap(() => this.refreshEmployees()) // Refresh list after successful addition
    );
  }

  /** Current snapshot */
  get snapshot(): Employee[] {
    return this._employees$.value;
  }
}
