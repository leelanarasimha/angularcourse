import { FormControl, NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onFormSubmit(authForm: NgForm) {
    console.log(authForm.value);
  }

  getPasswordErrors(password: FormControl) {
    if (password.errors.required) {
      return 'Password Required';
    }
    if (password.errors.minlength) {
      return 'password is of 6 characters';
    }
  }
}
