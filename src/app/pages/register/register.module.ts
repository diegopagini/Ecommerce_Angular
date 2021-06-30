import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterFormModule } from './register-form/register-form.module';
import { StoreModule } from '@ngrx/store';
import { registerReducer } from 'src/app/store/reducers/register.reducer';
import { EffectsModule } from '@ngrx/effects';
import { registerEffects } from 'src/app/store/effects/register.effects';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterFormModule,
    StoreModule.forFeature('register', registerReducer),
    EffectsModule.forFeature([registerEffects]),
  ],
  exports: [RegisterComponent],
})
export class RegisterModule {}
