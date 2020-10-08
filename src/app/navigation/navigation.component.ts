import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  isAuthenticated = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.userSub.subscribe((user) => {
      this.isAuthenticated = user ? true : false;
    });
  }

  onLogout(event: Event) {
    event.preventDefault();
    this.authService.logout();
  }
}
