import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginSuccess, startLogin, loginFail } from '../actions/login.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable()
export class loginEffects {
  loginActions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startLogin),
      map((action) => {
        const data = action.payload;
        const serviceResponse$: Observable<any> = this.loginService
          .login(data)
          .pipe(
            catchError((err) => {
              Swal.fire('Error', err.error.error.message, 'error');
              return `Error: ${err}`;
            })
          );
        return serviceResponse$;
      }),
      mergeMap((serviceReponse) => serviceReponse),
      map((serviceReponse) => {
        if (serviceReponse.registered === true) {
          this.router.navigate(['/home']);
          return loginSuccess({ payload: serviceReponse });
        } else {
          Swal.fire('Error', 'Invalid username or password', 'error');
          return loginFail();
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router
  ) {}
}
