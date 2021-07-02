import { Component, Input } from '@angular/core';
import { logout } from '../../../store/actions/login.actions';
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.scss'],
})
export class MyDataComponent {
  @Input() data: any;

  constructor(private store: Store) {}

  logout() {
    Swal.fire({
      title: 'your session has been closed',
      showConfirmButton: false,
      timer: 1500,
    });

    this.store.dispatch(logout());
  }
}
