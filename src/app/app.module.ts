import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { MahasiswaFormComponent } from './mahasiswa-form/mahasiswa-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MahasiswaComponent,
    MahasiswaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
