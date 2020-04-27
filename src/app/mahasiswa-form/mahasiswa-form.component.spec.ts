import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MahasiswaFormComponent } from './mahasiswa-form.component';

describe('MahasiswaFormComponent', () => {
  let component: MahasiswaFormComponent;
  let fixture: ComponentFixture<MahasiswaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahasiswaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahasiswaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
