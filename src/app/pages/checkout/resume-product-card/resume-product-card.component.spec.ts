import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeProductCardComponent } from './resume-product-card.component';

describe('ResumeProductCardComponent', () => {
  let component: ResumeProductCardComponent;
  let fixture: ComponentFixture<ResumeProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
