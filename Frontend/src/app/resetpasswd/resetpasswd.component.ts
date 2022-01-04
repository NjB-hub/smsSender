import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetpasswd',
  templateUrl: './resetpasswd.component.html',
  styleUrls: ['./resetpasswd.component.css']
})
export class ResetpasswdComponent implements OnInit {

  names: string = "container"
  constructor() { }

  ngOnInit(): void {
    
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
