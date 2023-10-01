import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageComponent} from './components/page/page.component';
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {LoadingSpinnerComponent} from './components/loading-spinner/loading-spinner.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PageComponent,
    LoadingSpinnerComponent
  ],
  exports: [
    PageComponent,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
