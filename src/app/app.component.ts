import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  title = 'enerprise-template';
  
  @Input() data: any;
  @Output() dataChanged: EventEmitter<any> = new EventEmitter<any>(); 

  ngOnChanges() {
    console.log("222")
    this.dataChanged.emit(this.data);
  }

  dataChanges(event: any) {
    console.log("111")
    this.dataChanged.emit(this.data);
  }
}
