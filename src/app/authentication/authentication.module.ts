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
import {RouterModule} from "@angular/router";
import {LoginGuardService} from "../shared/guards/login-guard.service";
import {AdminGuardService} from "../shared/guards/admin-guard.service";
import {UserDetailsPageComponent} from './pages/user-details-page/user-details-page.component';
import {UserDetailsInfoComponent} from './components/user-details-info/user-details-info.component';
import {UserDeleteComponent} from './components/user-delete/user-delete.component';


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
    UserRolePipe,
    UserDetailsPageComponent,
    UserDetailsInfoComponent,
    UserDeleteComponent
  ],
  exports: [
    LoginPageComponent,
    AuthenticationInfoComponent,
    IsAdminDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: "login", component: LoginPageComponent},
      {path: "register", component: RegisterPageComponent},
      {path: "register-confirmation", component: RegisterConfirmationPageComponent},
      {path: "users", component: UsersPageComponent, canActivate: [LoginGuardService, AdminGuardService]},
      {
        path: "user-details/:id",
        component: UserDetailsPageComponent,
        canActivate: [LoginGuardService, AdminGuardService]
      },
      {path: "forbidden", component: ForbiddenPageComponent}
    ])
  ]
})
export class AuthenticationModule {
}
