import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tutorial';
  
  nama:string = "";
  telepon:number = 0;
  isAvailable:boolean = false;
  NIK:number = 0;
  tanggal:Date = null;
  skill:string[] = [];
  nilai:number[] = [];

  constructor()
  {
    this.nama = "Miko Kucing olen";
    this.telepon = 123454;
    this.isAvailable = true;
    this.NIK = 390439394849;
    this.tanggal = new Date();
    this.skill = ['Koding', 'Makan', 'tidur'];
    this.nilai = [4,2,4,5,3];

    console.log(this.nama);
    console.log(this.telepon);
    console.log(this.isAvailable);
    console.log(this.NIK);
    console.log(this.tanggal.getDate());
    
    this.skill.forEach(
      (item)=>{
        console.log(item);
      }
    );
    this.nilai.forEach(
      (data)=>console.log(data)
    )
  }
}
