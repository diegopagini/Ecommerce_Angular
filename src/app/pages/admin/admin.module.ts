import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminFormModule } from './admin-form/admin-form.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, AdminFormModule],
  exports: [AdminComponent],
})
export class AdminModule {}
