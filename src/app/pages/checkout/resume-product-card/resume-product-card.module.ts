import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeProductCardComponent } from './resume-product-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ResumeProductCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [ResumeProductCardComponent],
})
export class ResumeProductCardModule {}
