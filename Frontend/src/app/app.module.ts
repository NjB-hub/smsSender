import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ChatpageComponent } from './chatpage/chatpage.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ForgotpswwdComponent } from './forgotpswwd/forgotpswwd.component';
import { EmailpasswdresetsendComponent } from './emailpasswdresetsend/emailpasswdresetsend.component';
import { ResetpasswdComponent } from './resetpasswd/resetpasswd.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { CreatecontactbuttonComponent } from './createcontactbutton/createcontactbutton.component';
import { ImportcontactbuttonComponent } from './importcontactbutton/importcontactbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    AuthentificationComponent,
    ChatpageComponent,
    ContactlistComponent,
    ForgotpswwdComponent,
    EmailpasswdresetsendComponent,
    ResetpasswdComponent,
    CreatecontactComponent,
    CreatecontactbuttonComponent,
    ImportcontactbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
