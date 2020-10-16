import { AuthGuard } from './services/guards/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { PostsComponent } from './posts/posts.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { page: 1, search: 'Leela' } },
  { path: 'categories', component: CategoriesComponent },
  { path: 'templateform', component: TemplateFormComponent },
  { path: 'reactiveform', component: ReactiveFormsComponent },
  { path: 'filterpipes', component: FilterPipesComponent },
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
  { path: 'auth', component: AuthComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
