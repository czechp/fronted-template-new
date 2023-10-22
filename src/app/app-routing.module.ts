import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./home/pages/home-page/home-page.component";
import {LoginPageComponent} from "./authentication/pages/login-page/login-page.component";
import {LoginGuardService} from "./shared/guards/login-guard.service";
import {RegisterPageComponent} from "./authentication/pages/register-page/register-page.component";
import {
  RegisterConfirmationPageComponent
} from "./authentication/pages/register-confirmation-page/register-confirmation-page.component";

const routes: Routes = [
  {path: "", component: HomePageComponent, canActivate: [LoginGuardService]},
  {path: "login", component: LoginPageComponent},
  {path: "register", component: RegisterPageComponent},
  {path: "register-confirmation", component: RegisterConfirmationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
