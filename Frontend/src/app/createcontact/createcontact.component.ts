import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent implements OnInit {

  myParam: any;
  user : any;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.myParam = params);
    console.log(this.myParam)
  }

  createContact(form: NgForm){
    let firstname =  form.value['firstname']
    let lastname =  form.value['lastname']
    let phoneNumber =  form.value['phoneNumber']
    let params = new HttpParams().set('id', this.myParam['userId']);

    this.httpClient.get(environment.serverAdress+"/api/auth/", 
                        {headers: {'Authorization':'Bearer '+this.myParam['token']},
                        params: params})
                    .subscribe(
                      (response: any) =>{
                        console.log(response)
                        this.user = response
                        let contact = {
                          firstname: firstname,
                          lastname: lastname,
                          phoneNumber: phoneNumber,
                          phoneOperator: 'Camtel',
                          user_id: this.user
                        }
                        this.httpClient.post(environment.serverAdress+"/api/contact/",contact,
                        {headers: {'Authorization':'Bearer '+this.myParam['token']}})
                                        .subscribe(
                                          (response: any) =>{
                                            console.log(response)
                                          },
                                          (error) =>{
                                            console.log(error)
                                        })
                      },
                      (error) =>{
                        console.log(error)
                      }
                    )    
  }

}
