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
  serverCreated = false;
  servers = ["Test Server", "Production Server", "Database-only Server"]
  test = false;
  testNum = 1;
  testArr = []

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = "Server was created! Name is " + this.serverName + " and the type is " + this.serverType;
  }

  onUpdateServerName(input: Event) {
    this.serverName = (<HTMLInputElement>input.target).value
  }

  onTestUpdate() {
    this.test = !this.test;
    this.testArr.push(this.testNum);
    this.testNum++;
    console.log(this.testArr)
  }
}