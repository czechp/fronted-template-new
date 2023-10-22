import {Directive, inject, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Store} from "@ngrx/store";
import {AuthenticationData, selectAuthenticationData} from "../store/authentication.store";

@Directive({
  selector: '[appIsAdmin]'
})
export class IsAdminDirective {
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);
  private authenticationService = inject(AuthenticationService);
  private store = inject(Store);

  constructor() {
    this.store.select(selectAuthenticationData)
      .subscribe(data => {
        this.generateContent(data);
      });
  }

  private generateContent(data: AuthenticationData) {
    this.viewContainerRef.clear();
    if (data.role === "ADMIN")
      this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}
