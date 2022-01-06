import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ChatpageComponent } from './chatpage/chatpage.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { EmailpasswdresetsendComponent } from './emailpasswdresetsend/emailpasswdresetsend.component';
import { ForgotpswwdComponent } from './forgotpswwd/forgotpswwd.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ResetpasswdComponent } from './resetpasswd/resetpasswd.component';


const routes: Routes = [
{ path: '', component: HomepageComponent },
{ path: 'contactlist/:userId/:token', component: ContactlistComponent},
{ path: 'forgotp', component: ForgotpswwdComponent},
{ path: 'emailforgotsend', component: EmailpasswdresetsendComponent},
{ path: 'chatpage/:userId/:token', component: ChatpageComponent },
{ path: 'createcontact/:userId/:token', component: CreatecontactComponent},
{ path: 'emailpasswdresetsend', component:EmailpasswdresetsendComponent},
{ path: 'reset-password/:id', component: ResetpasswdComponent},
{ path: 'authentification', component: AuthentificationComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
