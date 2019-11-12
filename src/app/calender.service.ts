import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable,of, from } from 'rxjs';
import { DayData } from './day-data';
import { Headers, Response, ResponseOptions } from '@angular/http';

@Injectable()
export class CalenderService {

  constructor(private _http: Http) { }

  getDetailsForDate(): Observable<DayData> {

    return this._http.get('https://datazen.katren.ru/calendar/day/');
  }

}