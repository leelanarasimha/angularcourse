import { DummyService } from './services/dummy.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FilterPipe } from './Pipes/filter.pipe';
import { ShortenPipe } from './Pipes/shorten.pipe';



@NgModule({
  declarations: [
    ShortenPipe,
    FilterPipe
  ],
  imports: [FormsModule,
    CommonModule],
  exports: [ShortenPipe,
    FilterPipe,FormsModule,
    CommonModule],
    providers: [DummyService]
})
export class SharedModule {

}
