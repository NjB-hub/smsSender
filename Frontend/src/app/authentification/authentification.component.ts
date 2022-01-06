import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})

@Injectable()
export class AuthentificationComponent implements OnInit {

  names: string = "container"
  serverAdress : string = 'http://localhost:3000';
  
  ngOnInit(){  };

  constructor(private httpClient: HttpClient, private router: Router) {}

  signup() {
    // container.classList.add("right-panel-active");
      this.names = this.names + " " + "right-panel-active"
  }
  signin() {
    // container.classList.remove("right-panel-active");
      this.names = "container"
  }

  onSignup(form: NgForm) {
    const firstname = form.value['firstName'];
    const lastname = form.value['lastName'];
    const country = form.value['country'];
    const number = form.value['number'];
    const password = form.value['password'];

    let user = {
      firstname : firstname,
      lastname : lastname,
      phoneNumber : number,
      country : "Cameroon",
      password : password,
      photo:""
    }
    this.httpClient
    .post(this.serverAdress+'/api/auth/signup', 
      user,
      {headers: {'Content-Type':'application/json'}})
    .subscribe({
      error: (e) => console.error(e),
      complete: () => console.log('User Created') 
      })
  }

  onSignin(form: NgForm){
    const tel = form.value['tel'];
    const password = form.value['password'];

    this.httpClient
    .post(this.serverAdress+'/api/auth/login', 
      {
        phoneNumber : tel,
        password: password,
      },
      {headers: {'Content-Type':'application/json'}})
    .subscribe(
      (response: any) =>{
        console.log(response)
        this.router.navigate(['/chatpage',response.userId,response.token])
      },
      (error) =>{
        console.log(error)
      }
    )
  }
}
