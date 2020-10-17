import { SharedModule } from './shared.module';
import { RouterModule } from '@angular/router';
import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    FilterPipesComponent,
  ],
  imports : [
    SharedModule,
    RouterModule.forChild([
      { path: 'filterpipes', component: FilterPipesComponent },
    ])
  ]
})
export class FilterModule {

}
