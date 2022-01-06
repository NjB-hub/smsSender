import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  contacts : any;
  myParam : any;

  ngOnInit(): void {
    this.route.params.subscribe(params => this.myParam = params);
    console.log(this.myParam)
    this.httpClient
    .get(environment.serverAdress+'/api/contact/getcontacts/'+this.myParam['userId'], 
      {headers: {'Authorization':'Bearer '+this.myParam['token']}})
    .subscribe(
      (response: any) =>{
        console.log(response)
        this.contacts = response 
      },
      (error) =>{
        console.log(error)
      }
    )
  }

}
