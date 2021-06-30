import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginFormModule } from './login-form/login-form.module';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from 'src/app/store/reducers/login.reducer';
import { EffectsModule } from '@ngrx/effects';
import { loginEffects } from 'src/app/store/effects/login.effects';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginFormModule,
    StoreModule.forFeature('login', loginReducer),
    EffectsModule.forFeature([loginEffects]),
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
