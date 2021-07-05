import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminFormComponent } from './admin-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorModule } from 'src/app/shared/form-error/form-error.module';

@NgModule({
  declarations: [AdminFormComponent],
  imports: [CommonModule, ReactiveFormsModule, FormErrorModule],
  exports: [AdminFormComponent],
})
export class AdminFormModule {}
