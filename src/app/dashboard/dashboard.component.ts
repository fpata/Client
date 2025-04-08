import { Component, ViewChild } from '@angular/core';
import { CalendarComponent } from '../common/calendar/calendar.component';
import { DashboardService } from '../services/dashboard.service';
import { PatientAppointment } from '../patient/patient';
import { colors } from '../common/calendar/color';
import { isSameMonth, setHours, setMinutes, toDate } from 'date-fns';
import { CalendarEvent } from 'angular-calendar';
import {format} from 'date-fns'
import { CalendarHeaderComponent } from '../common/calendar/calender-header.component';
import { CalendarService } from '../common/calendar/calendar.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  @ViewChild(CalendarComponent) calendar: CalendarComponent;

  appointments: PatientAppointment[] = [];

  constructor(
    private dashboardService: DashboardService,
    private calendarService: CalendarService
  ) {
    this.calendarService.GetNewData()
      .subscribe(date => this.handleDateChange(date));
  }

  private createEvents(): void {
    if (!this.appointments?.length) return;

    const events: CalendarEvent[] = this.appointments.map(appt => {
      const [hours, minutes] = appt.ApptTime?.split(":").map(Number);
      const apptDate = toDate(Date.parse(appt.ApptDate));
      
      return {
        title: `Patient: ${appt.PatientName}, Doctor: ${appt.DoctorName}, Treatment: ${appt.TreatmentName}`,
        start: setHours(setMinutes(apptDate, minutes), hours),
        color: colors.blue,
      };
    });

    if (events.length) {
      this.calendar.SetCalendarEvents(events);
    }
  }

  ngOnInit(): void {
    this.handleDateChange(new Date());
  }

  private handleDateChange(date: Date): void {
    const isDateChange = !this.calendar?.viewDate || 
                        !isSameMonth(date, this.calendar.viewDate);

    if (!isDateChange) return;

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    this.dashboardService.GetAppiontments(
      1,
      format(firstDay, 'yyyy-MM-dd'),
      format(lastDay, 'yyyy-MM-dd')
    ).subscribe(response => {
      this.appointments = JSON.parse(JSON.stringify(response));
      this.createEvents();
    });
  }
}
