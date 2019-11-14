import { Component } from '@angular/core';
import { CalenderService } from './calender.service';
import { map, take } from 'rxjs/operators';
import { DayData } from './day-data';
import { Headers, Response, ResponseOptions } from '@angular/http';
import { ReversePipe } from './reverse.pipe';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  public _today = new Date();
  constructor (private dateServive: CalenderService) {
    this.getDetailsForDate();
    this.getDetailsForDate_httpClient();
    
      
    this.dateServive.setMessage("task done: -4");
    this.dateServive.setMessage("task done: -3");
    this.dateServive.setMessage("task done: -2");
    this.dateServive.setMessage("task done: -1");  
    this.dateServive.setMessage("task done: 0");
    this.dateServive.setMessage("task done: 1");

    this.dateServive.getMessage().subscribe(data=>{
      console.log(data);
    });
    this.dateServive.setMessage("task done: 2");
    this.dateServive.setMessage("task done: 3");

  }

  getDetailsForDate() {
    this.dateServive.getDetailsForDate()
        .pipe(map(response => response.json())) 
        .subscribe(data =>  {
        console.log(data);
    });
  }
  // getDetailsForDate() {
  //   this.dateServive.getDetailsForDate()
  //       .subscribe(data =>  {
  //       console.log(data);
  //   });
  // }

    getDetailsForDate_httpClient() {
    this.dateServive.getDetailsForDate_httpclient()
        .subscribe(data =>  {
        console.log(data);
    });
  }

}
