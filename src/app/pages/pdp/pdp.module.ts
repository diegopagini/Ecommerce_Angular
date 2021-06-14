import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdpComponent } from './pdp.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PdpComponent],
  imports: [CommonModule, RouterModule],
  exports: [PdpComponent],
})
export class PdpModule {}
