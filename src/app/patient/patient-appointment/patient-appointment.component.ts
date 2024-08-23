import { Component, Input,OnInit, ViewChild, } from '@angular/core';
import { Patient, PatientAppointment } from '../patient';
import { CalendarComponent } from 'src/app/common/calendar/calendar.component';
import { CalendarEvent } from 'angular-calendar';
import { setDate,setHours,setMinutes, toDate } from 'date-fns';
import { colors } from 'src/app/common/calendar/color';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent {

@ViewChild(CalendarComponent ) calendar:CalendarComponent; 
@Input() appointments:PatientAppointment[];


  constructor(){}

 
 CreateEvents(){
    var events:CalendarEvent[] = new Array<CalendarEvent>();
    var hours:number = 0;
    var minutes:number =0; 
    var apptdate:Date =   new Date();
    if(this.appointments.length > 0) {
    this.appointments?.forEach(
      (appt) => {
        hours = Number.parseInt(appt?.Time?.split(":")[0]);
        minutes:Number.parseInt(appt?.Time?.split(":")[1]);
        apptdate = toDate(Date.parse(appt.Date));
        events = [ ... events, {
        "title": appt.PatientId.toString(),
        "start":setHours(setMinutes(new Date(),minutes),hours),
        "color":colors.blue,
       }];
      });
      if(events.length > 0 ){
      this.calendar.SetCalendarEvents(events);
      }
    }
  }

  ngOnChanges() {
    this.CreateEvents();
    }
    
}




/*{
  title: 'No event end date',
  start: setHours(setMinutes(new Date(), 0), 3),
  color: colors.blue,
},
{
  title: 'No event end date',
  start: setHours(setMinutes(new Date(), 0), 5),
  color: colors.yellow,
}*/