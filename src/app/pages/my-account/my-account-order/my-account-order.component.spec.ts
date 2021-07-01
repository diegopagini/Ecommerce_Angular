import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountOrderComponent } from './my-account-order.component';

describe('MyAccountOrderComponent', () => {
  let component: MyAccountOrderComponent;
  let fixture: ComponentFixture<MyAccountOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAccountOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
