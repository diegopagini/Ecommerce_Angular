import { TestBed } from '@angular/core/testing';

import { CheckoutGuardGuard } from './checkout-guard.guard';

describe('CheckoutGuardGuard', () => {
  let guard: CheckoutGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckoutGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
