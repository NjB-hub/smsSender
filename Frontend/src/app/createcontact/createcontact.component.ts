import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  newContactForm(){
    document.querySelector<HTMLElement>('.add-contact-wrapper')!.style.visibility="visible";
    document.querySelector<HTMLElement>('.add-contact-form')!.style.animation="popup .25s ease";
  }
  closeContactForm(){
    document.querySelector<HTMLElement>('.add-contact-wrapper')!.style.visibility="hidden";
    document.querySelector<HTMLElement>('.add-contact-form')!.style.animation="none";
  }


}
