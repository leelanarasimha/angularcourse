import {
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { tap } from 'rxjs/operators';

export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(req.headers);
    return next.handle(req).pipe(
      tap((event) => {
        console.log(event);
        console.log('logging Response from interceptor');
        if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
      })
    );
  }
}
