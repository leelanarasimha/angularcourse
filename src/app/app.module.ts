import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/guards/auth-guard.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeactivateGuardService } from './services/guards/deactivate-guard.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CategoriesComponent,
    UserComponent,
    EditUserComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthService, AuthGuardService, DeactivateGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
