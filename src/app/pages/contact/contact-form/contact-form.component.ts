import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  public contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
      console.log(this.contactForm.value);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
