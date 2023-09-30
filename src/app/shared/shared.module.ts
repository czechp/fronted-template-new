import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageComponent} from './components/page/page.component';
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {LoadingSpinnerComponent} from './components/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    PageComponent,
    LoadingSpinnerComponent
  ],
  exports: [
    PageComponent,
    MatButtonModule,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule {
}
