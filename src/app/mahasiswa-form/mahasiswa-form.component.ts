import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mahasiswa } from '../mahasiswa.model';

@Component({
  selector: 'app-mahasiswa-form',
  templateUrl: './mahasiswa-form.component.html',
  styleUrls: ['./mahasiswa-form.component.css']
})
export class MahasiswaFormComponent implements OnInit {
  @Input() mahasiswa:Mahasiswa;
  @Output() change = new EventEmitter<Mahasiswa>();

  constructor() { }

  ngOnInit(): void {
  }

  submit()
  {
    this.change.emit(null);
  }

}
