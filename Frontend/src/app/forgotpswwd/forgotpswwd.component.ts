import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forgotpswwd',
  templateUrl: './forgotpswwd.component.html',
  styleUrls: ['./forgotpswwd.component.css']
})
export class ForgotpswwdComponent implements OnInit {
  names: string = "container"

  constructor(private httpClient: HttpClient, private router: Router) { }
  ngOnInit(): void {}

  forgotp(form :NgForm){
    let email = form.value['Email']
    let phoneNumber = form.value['phoneNumber']

    this.httpClient.post(environment.serverAdress+'/api/auth/forgot-password',
     {
       email: email,
       phoneNumber: phoneNumber
     }).subscribe(
      (response: any) =>{
        console.log(response)
      },
      (error) =>{
        console.log(error)
      }
     )
     this.router.navigate(['emailpasswdresetsend'])
  }

}
