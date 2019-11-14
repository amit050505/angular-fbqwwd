import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable,of, from } from 'rxjs';
import { DayData } from './day-data';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { Subject, ReplaySubject, BehaviorSubject}from 'rxjs';

@Injectable()
export class CalenderService {

  msg =  new ReplaySubject<string>(3);

  constructor(private _http: Http, private _httpclient: HttpClient) { }

  getDetailsForDate(){

    return this._http.get('https://datazen.katren.ru/calendar/day/');
  }
  //  getDetailsForDate_httpclient(): Observable<HttpResponse<any>> {
  //   return this._httpclient.get('https://datazen.katren.ru/calendar/day/');
  // }
   getDetailsForDate_httpclient(): Observable<HttpResponse<any>> {

    return this._httpclient.get('https://datazen.katren.ru/calendar/day/', {observe: 'response'});
  }

  getMessage() {

    return this.msg.asObservable();

  }

  setMessage(value: string) {
      this.msg.next(value);
  }

}