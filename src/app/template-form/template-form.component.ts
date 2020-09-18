import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  gender = 'female';
  about = '';
  submitted = false;
  user = {
    username: '',
    email: '',
    gender: '',
    about: ''
  }

  @ViewChild('f') signUpForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  checkData() {
    console.log(this.signUpForm);
  }

  onFormSubmit() {
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.gender = this.signUpForm.value.gender;
    this.user.about = this.signUpForm.value.about;
    this.signUpForm.reset();
  }

  fillValues() {
    this.signUpForm.form.patchValue({
      userData: {
        email: 'leela@leela.com',
        username: 'Leela'
      },

    })
  }

}
