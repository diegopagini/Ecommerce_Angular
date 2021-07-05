import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  public contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      reason: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  get nameNoValid() {
    return (
      this.contactForm.get('name').invalid &&
      this.contactForm.get('name').touched
    );
  }

  get reasonNoValid() {
    return (
      this.contactForm.get('reason').invalid &&
      this.contactForm.get('reason').touched
    );
  }

  get messageNoValid() {
    return (
      this.contactForm.get('message').invalid &&
      this.contactForm.get('message').touched
    );
  }

  submit() {
    if (this.contactForm.valid) {
      this.contactService
        .sendMessage(this.contactForm.value)
        .pipe(take(1))
        .subscribe((resp: any) => {
          if (resp.name) {
            this.contactForm.reset();
            Swal.fire({
              icon: 'success',
              title: 'Your message was sent successfully',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
