import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../mahasiswa.model';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.css']
})
export class MahasiswaComponent implements OnInit {
  listMahasiswa:Mahasiswa[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initMahasiswa();
  }

  initMahasiswa()
  {
    this.listMahasiswa = [
      {id:1, nama:"Edo",NIM:201581090,jurusan:"Teknik Informatika"},
      {id:2, nama:"Fariz",NIM:201582123,jurusan:"Sistem Informasi"},
      {id:3, nama:"Susan",NIM:201583123,jurusan:"Teknik Industri"},
      {id:4, nama:"Gilang",NIM:201581990,jurusan:"Teknik Informatika"}
    ];
  }

  remove(id:number)
  {
    const tempMhs = this.listMahasiswa.filter(item=>{
      if(item.id !== id)
        return item;
    });
    this.listMahasiswa = tempMhs;
  }

}
