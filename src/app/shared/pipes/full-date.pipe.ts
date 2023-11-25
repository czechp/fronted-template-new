import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'fullDate',
})
export class FullDatePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    const date = new Date(value as string);
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}\n
    ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
  }

}
