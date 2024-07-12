import { TestBed } from '@angular/core/testing';

import { MlFavoritosService } from './ml-favoritos.service';

describe('MlFavoritosService', () => {
  let service: MlFavoritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MlFavoritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
