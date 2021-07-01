import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutFormComponent } from './checkout-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { StringSeparatedEachFourCharactersModule } from 'src/app/directives/string-separated-each-four-characters.module';

@NgModule({
  declarations: [CheckoutFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    StringSeparatedEachFourCharactersModule,
  ],
  exports: [CheckoutFormComponent],
})
export class CheckoutFormModule {}
