import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringSeparatedEachFourCharactersDirective } from './string-separated-each-four-characters.directive';

@NgModule({
  declarations: [StringSeparatedEachFourCharactersDirective],
  imports: [CommonModule],
  exports: [StringSeparatedEachFourCharactersDirective],
})
export class StringSeparatedEachFourCharactersModule {}
