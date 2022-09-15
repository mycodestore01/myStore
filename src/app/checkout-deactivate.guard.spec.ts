import { TestBed } from '@angular/core/testing';

import { CheckoutDeactivateGuard } from './checkout-deactivate.guard';

describe('CheckoutDeactivateGuard', () => {
  let guard: CheckoutDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckoutDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
