import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageComponent} from './components/page/page.component';
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {LoadingSpinnerComponent} from './components/loading-spinner/loading-spinner.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StatementComponent} from './components/statement/statement.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    PageComponent,
    LoadingSpinnerComponent,
    StatementComponent
  ],
  exports: [
    PageComponent,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    StatementComponent,
    HttpClientModule
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule {
}
