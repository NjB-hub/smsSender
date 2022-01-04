import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpswwd',
  templateUrl: './forgotpswwd.component.html',
  styleUrls: ['./forgotpswwd.component.css']
})
export class ForgotpswwdComponent implements OnInit {
  names: string = "container"


  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  signup() {
  // container.classList.add("right-panel-active");
    this.names = this.names + " " + "right-panel-active"
  }
  signin() {
  // container.classList.remove("right-panel-active");
    this.names = "container"
}

}
