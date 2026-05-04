import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface Asset {
  id: string;
  // Step 1 – Basic Info
  mainAssetNumber: string;
  subNumber: string;
  custodianDept: string;
  quantity: number;
  assetDescription: string;
  // Step 2 – Dates & Value
  acquisitionDate: string;
  capitalizationDate: string;
  unit: string;
  custodianId: string;
  // Step 3 – Classification
  location: string;
  assetClass: string;
  statusCode: string;
  component: string;
  // Financial
  currentValue?: number;
  // Meta
  addedOn: Date;
}

@Injectable({ providedIn: 'root' })
export class AssetService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5118/api/assets'; // Adjust port as needed for .NET API

  private _assets$ = new BehaviorSubject<Asset[]>([]);
  /** Observable list of all assets */
  readonly assets$ = this._assets$.asObservable();

  constructor() {
    this.refreshAssets();
  }

  /** Fetch latest assets from API */
  refreshAssets(): void {
    this.http.get<Asset[]>(this.apiUrl).subscribe({
      next: (assets) => this._assets$.next(assets),
      error: (err) => {
        console.error('Failed to load assets from API', err);
        // Optional: Load fallback or demo data if API fail
      }
    });
  }

  /** Add a new asset via API */
  addAsset(data: Omit<Asset, 'id' | 'addedOn'>): Observable<Asset> {
    return this.http.post<Asset>(this.apiUrl, data).pipe(
      tap(() => this.refreshAssets()) // Refresh list after successful addition
    );
  }

  /** Current snapshot */
  get snapshot(): Asset[] {
    return this._assets$.value;
  }
}
