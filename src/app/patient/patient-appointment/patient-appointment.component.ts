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