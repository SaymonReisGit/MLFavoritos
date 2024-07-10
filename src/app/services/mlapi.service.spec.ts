import { TestBed } from '@angular/core/testing';

import { MlapiService } from './mlapi.service';

describe('MlapiService', () => {
  let service: MlapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MlapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
