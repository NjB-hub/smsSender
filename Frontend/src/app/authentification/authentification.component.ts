import { Component, ContentChild, OnInit } from '@angular/core';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {

  names: string = "container"


  constructor() { }

  signup() {
  // container.classList.add("right-panel-active");
    this.names = this.names + " " + "right-panel-active"
  }
  signin() {
  // container.classList.remove("right-panel-active");
    this.names = "container"
}

 
}


