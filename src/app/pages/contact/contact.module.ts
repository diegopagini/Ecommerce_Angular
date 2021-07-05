import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactFormModule } from './contact-form/contact-form.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactFormModule],
  exports: [ContactComponent],
})
export class ContactModule {}
