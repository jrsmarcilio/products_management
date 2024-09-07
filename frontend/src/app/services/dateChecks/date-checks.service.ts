import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateChecksService {
  constructor() {}

  checkDate(date1: string, date2: Date) {
    const validityDate = new Date(date1);

    if (validityDate.getTime() > date2.getTime()) {
      return true;
    } else {
      return false;
    }
  }
}
