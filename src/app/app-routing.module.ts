import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { page: 1, search: 'Leela' } },
  {path: 'users', loadChildren: () => import ('./user.module').then(m => m.UserModule)},
  {path: 'posts', loadChildren: () => import ('./post.module').then(m => m.PostModule)},
  { path: 'categories', component: CategoriesComponent },
  { path: 'templateform', component: TemplateFormComponent },
  { path: 'reactiveform', component: ReactiveFormsComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
