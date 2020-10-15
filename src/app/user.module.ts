import { RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    UserComponent,
    EditUserComponent,
    UsersComponent,
  ],
  imports: [
    FormsModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    UserComponent,
    EditUserComponent,
    UsersComponent,
  ]
})
export class UserModule {

}
