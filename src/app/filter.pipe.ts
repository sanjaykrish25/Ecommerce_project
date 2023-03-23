
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString: string, property: string): any[] {
    if (value.length === 0 || !filterString) {
      return value;
    }
    let filteredUsers: any[] = [];
    for (let user of value) {
      if (user[property].trim().toLowerCase().includes(filterString.toLowerCase())) {
        filteredUsers.push(user);
      }
    }
    return filteredUsers;
  }
}

