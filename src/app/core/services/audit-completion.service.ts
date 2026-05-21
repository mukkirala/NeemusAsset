import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../Constant/apiConstant'; // ← adjust path if needed

export interface AuditRecord {
  auditID: number;
  auditDate: string;
  auditName: string;
  auditDescription: string;
  unitNo: string;
  auditBy: string;
  status: string;
  auditStatus: string;
  locationID: number;
  totalStock: number;
  custodianDepartment: string;
  custDepartmentCode: string;
  custDesignation: string;
  custodianName: string;
  completionDate: string;
  adminRemarks: string;
}

@Injectable({ providedIn: 'root' })
export class AuditCompletionService {
  constructor(private http: HttpClient) {}

//   getAudits(): Observable<AuditRecord[]> {
//     return this.http.get<AuditRecord[]>(`${BASE_URL}/AuditDetails`);
//   }


  getAudits(): Observable<AuditRecord[]> {
  console.log('📡 Fetching from:', `${BASE_URL}/AuditDetails`); // confirm URL in console
  return this.http.get<AuditRecord[]>(`${BASE_URL}/AuditDetails`);
}

  updateAudit(payload: AuditRecord): Observable<string> {
  return this.http.put(
    `${BASE_URL}/UpdateAudit`,
    payload,
    { responseType: 'text' }  // ✅ tells HttpClient to skip JSON parsing
  );
}
}


