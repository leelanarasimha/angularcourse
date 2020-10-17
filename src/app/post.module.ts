import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './services/guards/auth.guard';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PostsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: PostsComponent, canActivate: [AuthGuard] },
    ])
  ]
})
export class PostModule {

}
