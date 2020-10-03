import {
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let modifiedRequest = req.clone({
      headers: req.headers.append('auth', 'abc'),
      params: req.params.append('hai', 'hello world'),
    });
    return next.handle(modifiedRequest).pipe(
      tap((event) => {
        console.log(event);
        console.log('Response from interceptor');
        if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
      })
    );
  }
}
