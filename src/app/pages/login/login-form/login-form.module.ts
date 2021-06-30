import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorModule } from 'src/app/shared/form-error/form-error.module';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [CommonModule, ReactiveFormsModule, FormErrorModule],
  exports: [LoginFormComponent],
})
export class LoginFormModule {}
