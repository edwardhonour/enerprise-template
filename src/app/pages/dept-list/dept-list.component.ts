import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit, OnChanges {

  data: any;
  constructor(private _activatedRoute: ActivatedRoute) { }

  @Output() dataChanged: EventEmitter<any> = new EventEmitter<any>(); 

  ngOnChanges() {

  }
  
  ngOnInit(): void {
    this._activatedRoute.data.subscribe(({ data } )=> { 
      this.data = data; 
      console.log("333")
      this.dataChanged.emit(this.data);
    } )
  }

  dataChanges(event: any) {
    
  }
}
