import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-resetpasswd',
  templateUrl: './resetpasswd.component.html',
  styleUrls: ['./resetpasswd.component.css']
})
export class ResetpasswdComponent implements OnInit {

  names: string = "container"
  myParam: any
  constructor(private route: ActivatedRoute, private httpClient: HttpClient,  private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.myParam = params);
    console.log(this.myParam)
  }

  signup() {
    // container.classList.add("right-panel-active");
      this.names = this.names + " " + "right-panel-active"
    }
    signin() {
    // container.classList.remove("right-panel-active");
      this.names = "container"
  }

  resetp(form: NgForm){
    let password = form.value['password1']

    this.httpClient.put(environment.serverAdress+'/api/auth/reset/'+this.myParam['id'], 
     {
       password: password
     }).subscribe(
      (response: any) =>{
        console.log(response)
        this.router.navigate(['authentification'])
      },
      (error) =>{
        console.log(error)
      }) 
  }
}
