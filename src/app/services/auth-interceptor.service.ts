import {
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Request INterceptor');
    let modifiedRequest = req.clone({
      //headers: req.headers.append('auth', 'abc'),
      //params: req.params.append('hai', 'hello world'),
    });
    return next.handle(modifiedRequest);
  }
}
