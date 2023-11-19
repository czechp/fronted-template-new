import {Pipe, PipeTransform} from '@angular/core';
import {UserRole} from "../constants/user-role";

@Pipe({
  name: 'userRole'
})
export class UserRolePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return UserRole[value] || "Not defined";
  }

}
