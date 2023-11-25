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
import {YesOrNoPipe} from './pipes/yes-or-no.pipe';
import {YesOrNoDirective} from './directives/yes-or-no.directive';
import {MatTabsModule} from "@angular/material/tabs";
import {InfoSectionComponent} from './components/info-section/info-section.component';
import {FullDatePipe} from './pipes/full-date.pipe';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {ConfirmationModalComponent} from './components/confirmation-modal/confirmation-modal.component';


@NgModule({
  declarations: [
    PageComponent,
    LoadingSpinnerComponent,
    StatementComponent,
    YesOrNoPipe,
    YesOrNoDirective,
    InfoSectionComponent,
    FullDatePipe,
    ConfirmationModalComponent
  ],
  exports: [
    PageComponent,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    StatementComponent,
    HttpClientModule,
    YesOrNoPipe,
    YesOrNoDirective,
    MatTabsModule,
    InfoSectionComponent,
    FullDatePipe,
    MatDialogModule
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    MatDialogModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {width: "750px"}}
  ]
})
export class SharedModule {
}
