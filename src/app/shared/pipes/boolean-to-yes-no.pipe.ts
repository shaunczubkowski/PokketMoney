import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanToYesNo'
})
export class BooleanToYesNoPipe implements PipeTransform {

  transform(value: boolean): any {    
    return (value) ? 'Yes' : 'No';
  }

}
