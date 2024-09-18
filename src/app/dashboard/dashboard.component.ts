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

  @ViewChild(CalendarComponent ) calendar:CalendarComponent; 

  appointments:PatientAppointment[] =new Array<PatientAppointment>();

  constructor(private dashboardService:DashboardService, private calendarService:CalendarService ){
    this.calendarService.GetNewData().subscribe(data => this.DateChangedEvent(data));
  }

  CreateEvents(){
    var events:CalendarEvent[] = new Array<CalendarEvent>();
    var apptHours:number = 0;
    var apptMinutes:number =0; 
    var apptDate:Date =   new Date();
    var apptTitle:string= '';
    var splitTime:string[] =[];
    if(this.appointments.length > 0) {
    this.appointments?.forEach(
      (appt) => {
        splitTime =appt?.ApptTime?.split(":");
        apptHours =  Number.parseInt(splitTime[0]);
        apptMinutes= Number.parseInt(splitTime[1]);
        apptDate = toDate(Date.parse(appt.ApptDate));
        apptTitle = "Patient Name :" + appt.PatientName + ",  Doctor Name:"+ appt.DoctorName + ",  Treatment : "+appt.TreatmentName;
        ;
        events = [ ... events, {
        "title": apptTitle,
        "start":setHours(setMinutes(apptDate,apptMinutes),apptHours),
        "color":colors.blue,
       }];
      });
      if(events.length > 0 ){
      this.calendar.SetCalendarEvents(events);
      }
    }
  }
 
  ngOnInit(){
    var date = new Date();
    this.DateChangedEvent(date);
   
  }
  
  DateChangedEvent(date: Date) {
    var isDateChange= true;
    if(this.calendar != undefined  && this.calendar?.viewDate != undefined ){
      if(isSameMonth(date,this.calendar.viewDate) )  {
        isDateChange = false;
      }
    }
    if(isDateChange)
    {
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    this.dashboardService.GetAppiontments(1,format(firstDay,'yyyy-MM-dd'),format(lastDay,'yyyy-MM-dd')).subscribe 
    ( (response) =>{
        this.appointments = Object.assign(this.appointments,JSON.parse(JSON.stringify(response)) as PatientAppointment[]);
        this.CreateEvents();
      });
    }
  }
  
  ngAfterViewInit(){
  }
}
