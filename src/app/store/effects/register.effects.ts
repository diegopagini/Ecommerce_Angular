import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  startRegister,
  registerFail,
  registerSuccess,
} from '../actions/register.actions';
import Swal from 'sweetalert2';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';

@Injectable()
export class registerEffects {
  registerActions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startRegister),
      map((action: any) => {
        const data = {
          age: action.age,
          email: action.email,
          lastName: action.lastName,
          name: action.name,
          password: action.password,
          repeatedPassword: action.repeatedPassword,
        };
        const serviceResponse$: Observable<any> = this.registerService
          .register(data)
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
        if (serviceReponse.refreshToken) {
          Swal.fire(
            'Congratulations!',
            'You have successfully registered.',
            'success'
          );
          this.router.navigate(['/login']);
          return registerSuccess({ payload: serviceReponse });
        } else {
          return registerFail();
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private registerService: RegisterService,
    private router: Router
  ) {}
}
