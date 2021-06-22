import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ResumeComponent],
  imports: [CommonModule, RouterModule],
  exports: [ResumeComponent],
})
export class ResumeModule {}
