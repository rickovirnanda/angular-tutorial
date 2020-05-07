import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BarangService {
  constructor(private http:HttpClient) { }

  getBarang() {
    return this.http.get('/assets/barang.json');
  }
}
