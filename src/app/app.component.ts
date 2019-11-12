import { Component } from '@angular/core';
import { CalenderService } from './calender.service';
import { map, take } from 'rxjs/operators';
import { DayData } from './day-data';
import { Headers, Response, ResponseOptions } from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor (private dateServive: CalenderService) {
    this.getDetailsForDate();
  }

  getDetailsForDate() {
    this.dateServive.getDetailsForDate()
        .pipe(map(response => response.json())) 
        .subscribe(data =>  {
        console.log(data);

    });
  }

}
