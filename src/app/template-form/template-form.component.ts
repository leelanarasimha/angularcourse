import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  @ViewC

    constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(f: NgForm) {
    console.log(f);
  }

}
