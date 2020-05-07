import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarangComponent } from './barang.component';
import { BarangRoutingModule } from './barang-routing.module';
import { BarangService } from './barang.service';

@NgModule({
  declarations: [
    BarangComponent
  ],
  imports: [
    CommonModule,
    BarangRoutingModule
  ],
  providers: [
    BarangService
  ]
})
export class BarangModule { }
