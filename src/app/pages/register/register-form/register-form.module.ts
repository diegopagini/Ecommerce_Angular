import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorModule } from 'src/app/shared/form-error/form-error.module';

@NgModule({
  declarations: [RegisterFormComponent],
  imports: [CommonModule, ReactiveFormsModule, FormErrorModule],
  exports: [RegisterFormComponent],
})
export class RegisterFormModule {}
