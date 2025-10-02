import { Injectable } from '@angular/core';
import { GridRow } from './home.model';

@Injectable({ providedIn: 'root' })
export class HomeService {
  private rowData: GridRow[] = [
    { id: 1, make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { id: 2, make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { id: 3, make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
  ];

  getData(): GridRow[] {
    return this.rowData;
  }
  updateData(rows: GridRow[]): void {
    const rowMap = new Map(rows.map((r) => [r.id, r]));
    this.rowData = this.rowData.map((row) => (rowMap.has(row.id) ? rowMap.get(row.id)! : row));
  }
}
