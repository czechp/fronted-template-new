import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {AuthenticationInfoComponent} from './components/authentication-info/authentication-info.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {
  RegisterConfirmationPageComponent
} from './pages/register-confirmation-page/register-confirmation-page.component';
import {
  RegisterConfirmationFormComponent
} from './components/register-confirmation-form/register-confirmation-form.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    AuthenticationInfoComponent,
    RegisterPageComponent,
    RegisterFormComponent,
    RegisterConfirmationPageComponent,
    RegisterConfirmationFormComponent
  ],
  exports: [
    LoginPageComponent,
    AuthenticationInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AuthenticationModule {
}
