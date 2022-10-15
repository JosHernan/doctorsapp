import { TestBed } from '@angular/core/testing';

import { DashEspecialistaService } from './dash-especialista.service';

describe('DashEspecialistaService', () => {
  let service: DashEspecialistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashEspecialistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
