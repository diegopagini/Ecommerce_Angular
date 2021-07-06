import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss'],
})
export class AdminFormComponent implements OnInit {
  public adminForm: FormGroup;
  public categories: string[] = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  constructor(private fb: FormBuilder) {
    this.adminForm = this.fb.group({
      id: [this.randomizeId()],
      title: ['', [Validators.required, Validators.minLength(5)]],
      price: ['', [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required, Validators.minLength(20)]],
      category: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  get titleNoValid() {
    return (
      this.adminForm.get('title').invalid && this.adminForm.get('title').touched
    );
  }

  get priceNoValid() {
    return (
      this.adminForm.get('price').invalid && this.adminForm.get('price').touched
    );
  }

  get descriptionNoValid() {
    return (
      this.adminForm.get('description').invalid &&
      this.adminForm.get('description').touched
    );
  }

  get categoryNoValid() {
    return (
      this.adminForm.get('category').invalid &&
      this.adminForm.get('category').touched
    );
  }

  get imageNoValid() {
    return (
      this.adminForm.get('image').invalid && this.adminForm.get('image').touched
    );
  }

  randomizeId() {
    return Math.random().toString(36).substring(2);
  }

  submit() {
    if (this.adminForm.valid) {
      console.log(this.adminForm.value);
    } else {
      this.adminForm.markAllAsTouched();
    }
  }
}
