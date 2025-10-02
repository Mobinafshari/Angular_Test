import { Injectable } from '@angular/core';
import { GridRow } from './home.model';

@Injectable({ providedIn: 'root' })
export class HomeService {
  rowData: GridRow[];
  constructor() {
    this.rowData = JSON.parse(localStorage.getItem('rows') ?? '');
  }

  getData(): GridRow[] {
    return this.rowData;
  }
  updateData(rows: GridRow[]): void {
    const rowMap = new Map(rows.map((r) => [r.id, r]));
    this.rowData = this.rowData.map((row) => (rowMap.has(row.id) ? rowMap.get(row.id)! : row));
    localStorage.setItem('rows', JSON.stringify(this.rowData));
  }
}
