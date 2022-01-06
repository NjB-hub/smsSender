import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcontactbutton',
  templateUrl: './createcontactbutton.component.html',
  styleUrls: ['./createcontactbutton.component.css']
})
export class CreatecontactbuttonComponent implements OnInit {

  @Input() id!: string
  @Input() token!: string

  constructor(private router: Router) { }
  newContact(){
    this.router.navigate(['createcontact', this.id, this.token])
  }
  ngOnInit(): void {
  }


}
