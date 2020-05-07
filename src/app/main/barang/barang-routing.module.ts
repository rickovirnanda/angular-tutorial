import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarangComponent } from './barang.component';


const routes: Routes = [
  {
    path:'',
    component:BarangComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarangRoutingModule { }
