import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth0Component } from './auth0/auth0.component';
import { EmailInvitationComponent } from './email-invitation/email-invitation.component';

const routes: Routes = [
  { path: 'email-invitation', component: EmailInvitationComponent },
  { path: 'auth0', component: Auth0Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
