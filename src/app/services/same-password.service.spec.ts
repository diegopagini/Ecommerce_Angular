import { TestBed } from '@angular/core/testing';

import { SamePasswordService } from './same-password.service';

describe('SamePasswordService', () => {
  let service: SamePasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamePasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
