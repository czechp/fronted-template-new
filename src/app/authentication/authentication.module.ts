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
import {UsersPageComponent} from './pages/users-page/users-page.component';
import {IsAdminDirective} from './directives/is-admin.directive';
import {ForbiddenPageComponent} from './pages/forbidden-page/forbidden-page.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import {UserRolePipe} from './pipe/user-role.pipe';


@NgModule({
  declarations: [
    LoginPageComponent,
    AuthenticationInfoComponent,
    RegisterPageComponent,
    RegisterFormComponent,
    RegisterConfirmationPageComponent,
    RegisterConfirmationFormComponent,
    UsersPageComponent,
    IsAdminDirective,
    ForbiddenPageComponent,
    UsersListComponent,
    UserRolePipe
  ],
  exports: [
    LoginPageComponent,
    AuthenticationInfoComponent,
    IsAdminDirective
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AuthenticationModule {
}
