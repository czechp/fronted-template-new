import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {AuthenticationInfoComponent} from './components/authentication-info/authentication-info.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    AuthenticationInfoComponent
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
