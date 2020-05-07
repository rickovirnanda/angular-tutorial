import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { MahasiswaFormComponent } from './mahasiswa-form/mahasiswa-form.component';
import { HomeComponent } from './home/home.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'mahasiswa',
    component:MahasiswaComponent
  },
  {
    path:'mahasiswa/:id',
    component:MahasiswaFormComponent
  },
  {
    path:'admin',
    component:DefaultLayoutComponent,
    children:[
      {
        path:'barang',
        loadChildren:()=>import('./main/barang/barang.module').then(m=>m.BarangModule)
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
