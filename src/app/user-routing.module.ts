import { UserResolveService } from './services/resolvers/user-resolve.service';
import { DeactivateGuardService } from './services/guards/deactivate-guard.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './services/guards/auth.guard';
import { UsersComponent } from './users/users.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [AuthGuard],
    children: [
      { path: ':id/:name', component: UserComponent },
      {
        path: ':id/:name/edit',
        component: EditUserComponent,
        canDeactivate: [DeactivateGuardService],
        resolve: { user: UserResolveService },
      },
    ],
  },
];
@NgModule({
imports: [
  RouterModule.forChild(routes)
],
exports: [RouterModule]
})
export class UserRoutingModule {

}
