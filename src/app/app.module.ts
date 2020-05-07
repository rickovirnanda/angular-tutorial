import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { MahasiswaFormComponent } from './mahasiswa-form/mahasiswa-form.component';
import { HomeComponent } from './home/home.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MahasiswaComponent,
    MahasiswaFormComponent,
    HomeComponent,
    DefaultLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
