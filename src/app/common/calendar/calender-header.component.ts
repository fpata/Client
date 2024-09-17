import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { CalendarService } from './calendar.service';

@Component({
    selector: 'calendar-header',
    templateUrl: './calendar-header.component.html'
    })

    export class CalendarHeaderComponent {

      constructor(private calendarService:CalendarService){
        this.viewDateChange.subscribe((val:Date) => {
          this.calendarService.SetNewDate(val);
      })
      }
        @Input() view: CalendarView;
      
        @Input() viewDate: Date;
      
        @Input() locale: string = 'en';
      
        @Output() viewChange = new EventEmitter<CalendarView>();
      
        @Output() viewDateChange = new EventEmitter<Date>();
      
        CalendarView = CalendarView;        
      }
      

