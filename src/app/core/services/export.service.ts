import { Injectable } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  /**
   * Exports Syncfusion Grid data to Excel
   * @param grid The GridComponent instance
   * @param fileName Optional filename
   */
  exportToExcel(grid: GridComponent, fileName: string = 'Export'): void {
    if (!grid) return;
    grid.excelExport({
      fileName: `${fileName}_${new Date().toLocaleDateString()}.xlsx`,
      header: {
        headerRows: 1,
        rows: [
          { cells: [{ colSpan: 4, value: fileName.toUpperCase(), style: { fontColor: '#0ea5e9', fontSize: 20, hAlign: 'Center', bold: true } }] }
        ]
      }
    });
  }

  /**
   * Exports Syncfusion Grid data to PDF
   * @param grid The GridComponent instance
   * @param fileName Optional filename
   */
  exportToPdf(grid: GridComponent, fileName: string = 'Export'): void {
    if (!grid) return;
    grid.pdfExport({
      fileName: `${fileName}_${new Date().toLocaleDateString()}.pdf`,
      header: {
        fromTop: 0,
        height: 130,
        contents: [
          {
            type: 'Text',
            value: fileName.toUpperCase(),
            position: { x: 0, y: 50 },
            style: { textBrushColor: '#0ea5e9', fontSize: 25 }
          }
        ]
      },
      footer: {
        fromBottom: 160,
        height: 150,
        contents: [
          {
            type: 'PageNumber',
            pageNumberType: 'Arabic',
            format: 'Page {$current} of {$total}',
            position: { x: 0, y: 25 },
            style: { textBrushColor: '#475569', fontSize: 15 }
          }
        ]
      }
    });
  }
}
