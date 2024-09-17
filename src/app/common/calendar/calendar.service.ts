import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  private NewDate: Subject<Date> = new Subject<Date>();
  private OldDate: Subject<Date> = new Subject<Date>();
  
  SetNewDate(viewDate: Date) {
    this.NewDate.next(viewDate);
  }

  GetNewData() {
    return this.NewDate.asObservable();
  }

  SetOldDate(viewDate: Date) {
    this.OldDate.next(viewDate);
  }

  GetOldData() {
    return this.OldDate.asObservable();
  }

}
