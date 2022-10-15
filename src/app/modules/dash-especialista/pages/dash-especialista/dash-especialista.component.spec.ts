import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashEspecialistaComponent } from './dash-especialista.component';

describe('DashEspecialistaComponent', () => {
  let component: DashEspecialistaComponent;
  let fixture: ComponentFixture<DashEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashEspecialistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
