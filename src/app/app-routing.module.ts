import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { MahasiswaFormComponent } from './mahasiswa-form/mahasiswa-form.component';

const routes: Routes = [
  {
    path:'mahasiswa',
    component:MahasiswaComponent
  },
  {
    path:'mahasiswa/:id',
    component:MahasiswaFormComponent
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
