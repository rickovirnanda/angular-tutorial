import { Component, OnInit } from '@angular/core';
import { BarangService } from './barang.service'
import { Barang } from './barang.model';

@Component({
  selector: 'app-barang',
  templateUrl: './barang.component.html',
  styleUrls: ['./barang.component.css']
})
export class BarangComponent implements OnInit {
  barang:Barang[] = [];

  constructor(protected barangService:BarangService) {
    console.log("barang")
  }

  ngOnInit(): void {
    // get data
    this.getList();
  }

  getList()
  {
    this.barangService.getBarang().subscribe(
      (data:Barang[])=>{
        this.barang = data;
      });
  }

}
