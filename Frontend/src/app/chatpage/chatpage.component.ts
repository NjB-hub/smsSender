import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})

@Injectable()
export class ChatpageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  user: any;
  myParam : any;
  contacts : any;
  phoneNumber: any;
  serverAdress : string = 'http://localhost:3000';

  ngOnInit(): void {
    this.route.params.subscribe(params => this.myParam = params);
    console.log(this.myParam)
    this.httpClient
    .get(this.serverAdress+'/api/contact/getcontacts/'+this.myParam['userId'], 
      {headers: {'Authorization':'Bearer '+this.myParam['token']}})
    .subscribe(
      (response: any) =>{
        console.log(response)
        this.contacts = response 
        this.user = this.contacts[0].firstName 
        this.phoneNumber = this.contacts[0].phoneNumber
        if(this.contacts.length > 10){
          this.contacts.slice(0,10)
        }
      },
      (error) =>{
        console.log(error)
      }
    )
  }

  select(contact: any){
    this.user = contact.firstName
    this.phoneNumber = contact.phoneNumber
  }

  sendsms(form : NgForm){
    let message = form.value['message']
    console.log(message)
    this.httpClient.post(this.serverAdress+'/api/message/sendsms',
    {
      message: message,
      phoneNo: this.phoneNumber
    },
    {headers: {'Authorization':'Bearer '+this.myParam['token']}})
    .subscribe(
      (response: any) =>{
        console.log(response)
      },
      (error) =>{
        console.log(error)
      }
    )
    let tmp: any;
    tmp = document.getElementById('message-container')
    tmp.innerHTML += ('<div class="message" style="display: block;text-align:center;background: #dedede;max-width: 260px;margin-bottom: 12px;border: 1px solid #dedede;border-radius: 25px;"><p>'+message+'</p></div>')
  }

}
