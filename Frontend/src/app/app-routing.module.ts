import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
{ path: '', component: HomepageComponent },
{ path: 'authentification', component: AuthentificationComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
