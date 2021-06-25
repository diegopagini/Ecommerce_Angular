import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutResumeComponent } from './checkout-resume.component';
import { ResumeProductCardModule } from '../resume-product-card/resume-product-card.module';

@NgModule({
  declarations: [CheckoutResumeComponent],
  imports: [CommonModule, ResumeProductCardModule],
  exports: [CheckoutResumeComponent],
})
export class CheckoutResumeModule {}
