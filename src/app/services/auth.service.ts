import { User } from './../auth/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn = false;
  userSub = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyASi_-Ea6ygtX9MSBhvqYMIS6MUyy3F3s0
    `,
        { email, password, returnSecureToken: true }
      )
      .pipe(catchError(this.getErrorHandler), tap(this.handleUser.bind(this)));
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyASi_-Ea6ygtX9MSBhvqYMIS6MUyy3F3s0
    `,
        { email, password, returnSecureToken: true }
      )
      .pipe(catchError(this.getErrorHandler), tap(this.handleUser.bind(this)));
  }

  private handleUser(response: AuthResponseData) {
    const expireDate = new Date(
      new Date().getTime() + +response.expiresIn * 1000
    );
    const user = new User(
      response.email,
      response.localId,
      response.idToken,
      expireDate
    );
    this.userSub.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  getErrorHandler(errorRes: HttpErrorResponse) {
    let errorMessage = 'An Error Occurred';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Email Already Exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email Not Found';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid Password';
        break;
    }
    return throwError(errorMessage);
  }

  autoLogin() {
    let userData: {
      email: string;
      _token: string;
      expirationDate: string;
      localId: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    let user = new User(
      userData.email,
      userData.localId,
      userData._token,
      new Date(userData.expirationDate)
    );

    if (user.token) {
      this.userSub.next(user);
    }
  }

  logout() {
    this.userSub.next(null);
    this.router.navigate(['/auth']);
  }

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 1000);
    });
  }
}
