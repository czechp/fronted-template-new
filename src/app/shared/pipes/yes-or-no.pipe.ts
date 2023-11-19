import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'yesOrNo'
})
export class YesOrNoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value as boolean ? "TAK" : "NIE";
  }

}
