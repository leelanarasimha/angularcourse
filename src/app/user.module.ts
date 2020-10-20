import { DummyService } from './services/dummy.service';
import { SharedModule } from './shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    UserComponent,
    EditUserComponent,
    UsersComponent,
  ],
  imports: [
    UserRoutingModule,
    SharedModule
  ],

})
export class UserModule {

}
