import { Params } from '@angular/router';
import { exhaustMap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthTokenInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.userSub.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(req);
        }
        let modifiedReq = req.clone({
          params: req.params.append('auth', user.token),
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
