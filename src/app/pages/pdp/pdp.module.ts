import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdpComponent } from './pdp.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PdpComponent],
  imports: [CommonModule, RouterModule, FormsModule, SharedModule],
  exports: [PdpComponent],
})
export class PdpModule {}
