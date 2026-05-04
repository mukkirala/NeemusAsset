import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';
import { CommonCardComponent } from '../../../shared/components/common-card/common-card.component';
import { ButtonComponent } from '../../../shared/components/button/button';
import { AssetService, Asset } from '../../../core/services/asset.service';

@Component({
  selector: 'app-add-asset-documents',
  standalone: true,
  imports: [CommonModule, FormsModule, DataTableComponent, CommonCardComponent, ButtonComponent],
  templateUrl: './add-asset-documents.component.html',
  styleUrls: []
})
export class AddAssetDocumentsComponent implements OnInit {
  private assetService = inject(AssetService);

  // Form State
  selectedAssetId: string = '';
  imagePreview: string | null = null;
  documentType: string = '';
  
  assets: Asset[] = [];
  documentTypes: string[] = ['Inovice', 'Warranty', 'Maintenance', 'Insurance', 'Manual'];
  
  // Table Data
  documentsList: any[] = [];
  columns: TableColumn[] = [
    { field: 'asset', headerText: 'Asset', width: 140 },
    { field: 'docName', headerText: 'Document Name', width: 180 },
    { field: 'location', headerText: 'Image Location', width: 180 },
    { field: 'view', headerText: 'View', width: 100, textAlign: 'Center' },
    { field: 'delete', headerText: 'Delete', width: 100, textAlign: 'Center' }
  ];

  ngOnInit(): void {
    this.assetService.assets$.subscribe(assets => {
      this.assets = assets;
      // Fallback dummy for demo
      if (this.assets.length === 0) {
        this.assets = [
            { id: '1', mainAssetNumber: '60050011', assetDescription: 'Dell Laptop', subNumber: '0', custodianDept: 'IT', quantity: 1, acquisitionDate: '', capitalizationDate: '', unit: '', custodianId: '', location: '', assetClass: '', statusCode: '', component: '', addedOn: new Date() }
        ];
      }
    });
  }

  onFileChange(event: any, target: 'image' | 'doc'): void {
    const file = event.target.files[0];
    if (file && target === 'image') {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onAddDocument(): void {
    if (!this.selectedAssetId || !this.documentType) {
      alert('Please select an asset and document type.');
      return;
    }

    const asset = this.assets.find(a => a.id === this.selectedAssetId);
    this.documentsList = [
      ...this.documentsList,
      {
        asset: asset?.mainAssetNumber || 'N/A',
        docName: this.documentType,
        location: 'C:\\Users\\Documents\\Sample.pdf',
        view: '👁️',
        delete: '🗑️'
      }
    ];
  }

  onSave(): void {
    console.log('Saving documents:', this.documentsList);
    alert('Documents saved successfully!');
  }
}
