import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopBarComponent} from './layout/components/top-bar/top-bar.component';
import {NavBarComponent} from './layout/components/nav-bar/nav-bar.component';
import {AuthenticationModule} from "./authentication/authentication.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./shared/shared.module";
import {StoreModule} from "@ngrx/store";
import {statementReducer} from "./shared/stores/statement.store";
import {authenticationReducer} from "./authentication/store/authentication.store";
import {HomePageComponent} from './home/pages/home-page/home-page.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpResponseErrorInterceptorService} from "./shared/interceptors/http-response-error-interceptor.service";
import {InitService} from "./init.service";

export function initializeApp(appInitializer: InitService) {
  return () => appInitializer.initializeApp();
}

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavBarComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    SharedModule,
    StoreModule.forRoot({statementStore: statementReducer, authenticationStore: authenticationReducer})
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpResponseErrorInterceptorService,
    multi: true
  },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [InitService],
      multi: true
    }
  ],


  bootstrap: [AppComponent]
})
export class AppModule {
}
