import { DummyService } from './services/dummy.service';
import { UserResolveService } from './services/resolvers/user-resolve.service';
import { UserService } from './services/user.service';
import { DeactivateGuardService } from './services/guards/deactivate-guard.service';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { AuthTokenInterceptorService } from './services/auth-token-interceptor.service';
import { LoggingInterceptorService } from './services/logging-interceptor.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoggingInterceptorService,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthTokenInterceptorService,
    multi: true,
  },
  AuthGuardService,
  DeactivateGuardService,
  UserService,
  UserResolveService]
})
export class CoreModule {

}
