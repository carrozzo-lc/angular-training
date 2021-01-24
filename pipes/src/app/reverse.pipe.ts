import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    let arrayStr = value.split("").reverse();
    let finalStr = arrayStr.toString().replace(/,/g, "");

    return finalStr;
  }

}
