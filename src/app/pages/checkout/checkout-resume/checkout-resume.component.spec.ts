import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutResumeComponent } from './checkout-resume.component';

describe('CheckoutResumeComponent', () => {
  let component: CheckoutResumeComponent;
  let fixture: ComponentFixture<CheckoutResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
