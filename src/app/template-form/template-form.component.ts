import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  @ViewChild('f') signUpForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  checkData() {
    console.log(this.signUpForm);
  }

  onFormSubmit() {
    console.log(this.signUpForm);
  }

}
