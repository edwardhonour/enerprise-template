import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-left-navbar',
  templateUrl: './left-navbar.component.html',
  styleUrls: ['./left-navbar.component.css']
})
export class LeftNavbarComponent implements OnInit, OnChanges {

  @Input() data: any;

  ngOnChanges() {
      console.log(this.data);
  }

  constructor() { }
  d: string='1';
  
  ngOnInit(): void {
    
  }

}
