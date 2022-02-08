import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmailInvitationComponent } from './email-invitation/email-invitation.component';
import { Auth0Component } from './auth0/auth0.component';
import { CompleteUserProfileComponent } from './complete-user-profile/complete-user-profile.component';
import { CreateCompanyAccountComponent } from './create-company-account/create-company-account.component';
import { CreateCompanyAccountStp2Component } from './create-company-account-stp2/create-company-account-stp2.component';
import { AgreeToTermsComponent } from './agree-to-terms/agree-to-terms.component';
import { SignupCompleteComponent } from './signup-complete/signup-complete.component';






@NgModule({
  declarations: [
    AppComponent,
    EmailInvitationComponent,
    Auth0Component,
    CompleteUserProfileComponent,
    CreateCompanyAccountComponent,
    CreateCompanyAccountStp2Component,
    AgreeToTermsComponent,
    SignupCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor() {

  }

}
