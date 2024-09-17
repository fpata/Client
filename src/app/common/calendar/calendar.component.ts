import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { CalendarEvent, CalendarMonthViewEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { isSameDay, isSameMonth, setHours, setMinutes } from 'date-fns';
import { colors } from './color';
import { CalendarHeaderComponent } from './calender-header.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

@ViewChild(CalendarHeaderComponent) calendarHeader:CalendarHeaderComponent;

  view: CalendarView = CalendarView.Day;
  viewDate: Date = new Date();
  events: CalendarEvent[];
  
  SetCalendarEvents(updatedEvents: CalendarEvent[]) {
    this.events = updatedEvents;

  }
}

