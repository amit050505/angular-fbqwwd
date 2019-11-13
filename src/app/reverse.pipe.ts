import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
 constructor(private datePipe: DatePipe) {
}

  transform(value: any, args?: any): any {
    return this.datePipe.transform(new Date(), 'MM/dd/yyyy');
  }

}