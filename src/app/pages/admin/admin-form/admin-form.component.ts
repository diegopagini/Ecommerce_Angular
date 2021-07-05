import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss'],
})
export class AdminFormComponent implements OnInit {
  public adminForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.adminForm = this.fb.group({
      id: [],
      title: ['', [Validators.required, Validators.minLength(5)]],
      price: ['', [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  ngOnInit(): void {}

  get titleNoValid() {
    return (
      this.adminForm.get('title').value && this.adminForm.get('title').touched
    );
  }

  get priceNoValid() {
    return (
      this.adminForm.get('price').value && this.adminForm.get('price').touched
    );
  }

  get descriptionNoValid() {
    return (
      this.adminForm.get('description').value &&
      this.adminForm.get('description').touched
    );
  }

  submit() {
    if (this.adminForm.valid) {
      console.log(this.adminForm.value);
    } else {
      this.adminForm.markAllAsTouched();
    }
  }
}
