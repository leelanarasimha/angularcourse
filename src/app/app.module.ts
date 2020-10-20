import { DummyService } from './services/dummy.service';
import { SharedModule } from './shared.module';
import { CoreModule } from './core.module';
import { FilterModule } from './filter.module';
import { AuthModule } from './auth.module';
import { PostModule } from './post.module';
import { UserModule } from './user.module';
import { PlaceholderDirective } from './shared/Placeholder.directive';
import { NavigationComponent } from './navigation/navigation.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    PageNotFoundComponent,
    TemplateFormComponent,
    ReactiveFormsComponent,
    LoadingSpinnerComponent,
    NavigationComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AuthModule,
    FilterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],


  bootstrap: [AppComponent],
})
export class AppModule {}
