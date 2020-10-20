import { DummyService } from './services/dummy.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angularrouting';
  userAdded = false;
  userAddedSubscription: Subscription;
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private DummyService: DummyService
  ) {}

  ngOnInit() {
    this.authService.autoLogin();
    this.DummyService.printLog('Hello from App Component');
  }

  onLoginClick() {}

  onLogoutClick() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userAddedSubscription.unsubscribe();
  }
}
