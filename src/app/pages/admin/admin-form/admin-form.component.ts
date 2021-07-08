import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss'],
})
export class AdminFormComponent {
  public adminForm: FormGroup;
  public categories: string[] = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];
  private downloadUrl: Observable<string>;
  private fbUrl: string;

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService,
    private storage: AngularFireStorage
  ) {
    this.adminForm = this.fb.group({
      id: [this.randomizeId()],
      title: ['', [Validators.required, Validators.minLength(5)]],
      price: ['', [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required, Validators.minLength(20)]],
      category: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }

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

  onFileSelected(event) {
    let n = Date.now();
    const file = event.target.files[0];
    const filePath = `img/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`img/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadUrl = fileRef.getDownloadURL();
          this.downloadUrl.subscribe((url) => {
            if (url) {
              this.fbUrl = url;
            }
          });
        })
      )
      .subscribe();
  }

  randomizeId() {
    return Math.random().toString(36).substring(2);
  }

  submit() {
    if (this.adminForm.valid) {
      this.adminForm.value.image = this.fbUrl;
      this.firebaseService.addNewProduct(this.adminForm.value);
      Swal.fire({
        icon: 'success',
        title: 'Your product was added successfully',
        showConfirmButton: false,
        timer: 1500,
      });
      this.adminForm.reset();
    } else {
      this.adminForm.markAllAsTouched();
    }
  }
}
