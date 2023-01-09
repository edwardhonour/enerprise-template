import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit, OnChanges {

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
