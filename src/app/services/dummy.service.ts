import { Injectable } from '@angular/core';


export class DummyService {
  logMessage: string;

  printLog(message: string) {
    console.log(message);
    console.log(this.logMessage);
    this.logMessage = message;
  }
}
