import { TestBed } from '@angular/core/testing';

import { RemoveSpacesService } from './remove-spaces.service';

describe('RemoveSpacesService', () => {
  let service: RemoveSpacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveSpacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
