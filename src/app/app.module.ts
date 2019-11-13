import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CalenderService } from './calender.service';
import { ReversePipe } from './reverse.pipe';
import { DatePipe } from '@angular/common';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ReversePipe ],
  bootstrap:    [ AppComponent ],
  providers: [CalenderService, DatePipe]
})
export class AppModule { }
