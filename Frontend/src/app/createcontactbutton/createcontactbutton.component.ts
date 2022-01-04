import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createcontactbutton',
  templateUrl: './createcontactbutton.component.html',
  styleUrls: ['./createcontactbutton.component.css']
})
export class CreatecontactbuttonComponent implements OnInit {

  constructor() { }
  newContactForm(){
    document.querySelector<HTMLElement>('.add-contact-wrapper')!.style.visibility="visible";
    document.querySelector<HTMLElement>('.add-contact-form')!.style.animation="popup .25s ease";
  }
  closeContactForm(){
    document.querySelector<HTMLElement>('.add-contact-wrapper')!.style.visibility="hidden";
    document.querySelector<HTMLElement>('.add-contact-form')!.style.animation="none";
  }

  ngOnInit(): void {
  }


}
