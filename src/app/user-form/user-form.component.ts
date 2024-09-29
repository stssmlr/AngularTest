import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../user';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})

export class UserFormComponent {

  userForm: FormGroup;
  @Output() onCreate = new EventEmitter<IUser>()

  constructor(private formBuilder: FormBuilder){
    this.userForm = this.formBuilder.group({
      id: [0, Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.email],
      role: ['User', Validators.required]
    })
  }

  onSubmit() {
    if (!this.userForm.valid) {
      console.log("Invalid data!");
      return;
    }

    let user: IUser = this.userForm.value;
    console.log(user);

    this.onCreate.emit(user);
  }
}
