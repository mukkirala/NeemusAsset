import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-asset-location-map',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './asset-location-map.component.html',
  styleUrls: []
})
export class AssetLocationMapComponent implements OnInit {
  columns: TableColumn[] = [
    { field: 'mainAssetNumber', headerText: 'Main Asset Number', width: 160, isPrimaryKey: true },
    { field: 'assetDescription', headerText: 'Asset Description', width: 250 },
    { field: 'latitude', headerText: 'Latitude', width: 150 },
    { field: 'longitude', headerText: 'Longitude', width: 150 },
    { field: 'viewOnMap', headerText: '', width: 140, textAlign: 'Center' }
  ];

  data: any[] = [
    { mainAssetNumber: '60050011', assetDescription: 'A3 Size Multi Function Printing Device(HP M5025)', latitude: '17.482155', longitude: '78.479002', viewOnMap: true },
    { mainAssetNumber: '60050016', assetDescription: 'Work Station for O&M of EPABX', latitude: '17.482136', longitude: '78.478997', viewOnMap: true },
    { mainAssetNumber: '60050062', assetDescription: 'Canoscan LIDE 25 Scanner', latitude: '26.574569', longitude: '93.781940', viewOnMap: true },
    { mainAssetNumber: '60050094', assetDescription: 'Desktop Laser Printer: HP LaserJet P1007', latitude: '26.574457', longitude: '93.782079', viewOnMap: true },
    { mainAssetNumber: '60050131', assetDescription: 'A4 Size Flatbed Scanner: HP Scanjet G3110', latitude: '26.574566', longitude: '93.781916', viewOnMap: true },
    { mainAssetNumber: '60050169', assetDescription: 'Desktop Laser Printer: HP LaserJet P1566', latitude: '26.574553', longitude: '93.782021', viewOnMap: true },
    { mainAssetNumber: '60050174', assetDescription: 'Desktop Laser Printer: HP LaserJet P1566', latitude: '26.574565', longitude: '93.781942', viewOnMap: true },
    { mainAssetNumber: '60050178', assetDescription: 'Desktop Laser Printer: HP LJ 1566', latitude: '26.574601', longitude: '93.781940', viewOnMap: true },
    { mainAssetNumber: '60050186', assetDescription: 'A4 Scanner: HP Scanjet G3110 Photo Scanner', latitude: '26.574486', longitude: '93.782061', viewOnMap: true },
    { mainAssetNumber: '60050200', assetDescription: 'Scanner: Model HP G3110', latitude: '26.574460', longitude: '93.782070', viewOnMap: true }
  ];

  ngOnInit(): void {
    // Data is already populated
  }
}
