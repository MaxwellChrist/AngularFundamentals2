import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  collapsed = true;
  @Input() inputLink: string;
  @Output() outputLink = new EventEmitter<string>();

  constructor() {};

  ngOnInit(): void {};

  newLink(event) {
    this.outputLink.emit(event.target.text);
  }
}
