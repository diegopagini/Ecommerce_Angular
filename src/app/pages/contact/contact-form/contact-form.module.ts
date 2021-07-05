import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorModule } from 'src/app/shared/form-error/form-error.module';

@NgModule({
  declarations: [ContactFormComponent],
  imports: [CommonModule, ReactiveFormsModule, FormErrorModule],
  exports: [ContactFormComponent],
})
export class ContactFormModule {}
