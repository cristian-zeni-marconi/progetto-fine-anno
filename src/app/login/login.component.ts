import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pas: boolean;
  username: string;
  password: string;
  stile: string;

  constructor() {
    
    this.pas = false;
    this.username = "";
    this.password = "";
    this.stile = "btn btn-outline-dark";
  }

  controllo(){

    if(this.username == "Arios" && this.password == "Rattari16094"){
      this.pas = true;
      this.stile = "btn btn-outline-dark";
    }
    else{
      this.pas = false;
      this.stile = "btn btn-danger";
    }

  }

  ngOnInit() {
  }

}