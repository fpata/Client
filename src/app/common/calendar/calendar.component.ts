import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { setHours, setMinutes } from 'date-fns';
import { colors } from './color';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

   view: CalendarView = CalendarView.Day;

   viewDate: Date = new Date();
 
   events: CalendarEvent[] = [
     {
       title: 'No event end date',
       start: setHours(setMinutes(new Date(), 0), 3),
       color: colors.blue,
     },
     {
       title: 'No event end date',
       start: setHours(setMinutes(new Date(), 0), 5),
       color: colors.yellow,
     },
   ];

}