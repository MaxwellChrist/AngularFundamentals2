import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = '';
  serverType = '';

  username = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created! Name is " + this.serverName + " and the type is " + this.serverType;
  }

  onUpdateServerName(input: Event) {
    this.serverName = (<HTMLInputElement>input.target).value
  }

  onUpdateUsername() {
    return this.username = ''
  }
}