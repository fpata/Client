import { Component, Input,OnInit, ViewChild, } from '@angular/core';
import { Patient, PatientAppointment, PatientViewModel } from '../patient';
import { CalendarComponent } from 'src/app/common/calendar/calendar.component';
import { CalendarEvent } from 'angular-calendar';
import { format, setDate,setHours,setMinutes, toDate } from 'date-fns';
import { colors } from 'src/app/common/calendar/color';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent {
patientViewModel:PatientViewModel;
@ViewChild(CalendarComponent,{static:true}) calendar:CalendarComponent; 

appointments:PatientAppointment[];

constructor(private patientService:PatientService){
  this.patientService.getData().subscribe((patientViewModel)=> {
    this.patientViewModel = patientViewModel;
    this.appointments = this.patientViewModel.PatientAppointments;
    this.CreateEvents();
  });
}

 
 CreateEvents(){
    var events:CalendarEvent[] = new Array<CalendarEvent>();
    var apptHours:number = 0;
    var apptMinutes:number =0; 
    var apptDate:Date =   new Date();
    var apptTitle:string= '';
    var splitTime:string[] =[];
    if(this.appointments != undefined && this.appointments.length > 0) {
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
      if(events?.length > 0 ){
      this.calendar?.SetCalendarEvents(events);
      }
    }
  }

    
    SaveAppointment() {
      var appointment:PatientAppointment = new PatientAppointment();
      var appointmentId = (document.getElementById('hdAppointmentId') as HTMLInputElement).value;
      var IsEdit:boolean = false;
      if(!(appointmentId == undefined || appointmentId == '')) {
        var ApptId =  Number.parseInt(appointmentId)
        appointment = this.appointments.find(x => x.ID == ApptId) as PatientAppointment;
        IsEdit = true;
       
      }
      else {
        if(this.appointments == undefined ||  this.appointments == null) {
          this.appointments = new Array<PatientAppointment>();
         appointment.ID = -1;
        }else{
          appointment.ID = (Math.min(...this.appointments.map(x => x.ID)) + (-1)); 
      }
      appointment.PatientID = this.patientViewModel.Patient.ID;
    }
      var dtStringValue= (document.getElementById('txtAppointmentDate') as HTMLInputElement).value;
      if(dtStringValue == undefined || dtStringValue == ''){
        dtStringValue = format(Date.now(),'yyyy-MM-dd');
      }else{
        dtStringValue = format(toDate(dtStringValue),'yyyy-MM-dd');
      }
      
      appointment.ApptDate =  dtStringValue;
      appointment.ApptTime = (document.getElementById('txtAppointmentTime') as HTMLInputElement).value;
      appointment.DoctorName = (document.getElementById('txtApptDoctorName') as HTMLInputElement).value;
      appointment.TreatmentName =(document.getElementById('txtApptProcedure') as HTMLInputElement).value;
      if(!IsEdit){
        this.appointments.push(appointment);
      }
      (document.getElementById('hdAppointmentId') as HTMLInputElement).value = '';
      this.CreateEvents();
      this.patientViewModel.PatientAppointments = this.appointments;
      this.patientService.setData(this.patientViewModel);
      }
      

      DeleteAppointment(AppointmentId: number) {
        var appointmentIndex = this.appointments.findIndex(x=> x.ID === AppointmentId);
        this.appointments.splice(appointmentIndex,1);
        this.CreateEvents();
        this.patientViewModel.PatientAppointments = this.appointments;
        this.patientService.setData(this.patientViewModel);
      }
        
      EditAppointment(appointmentId: number) {
          document.getElementById("addAppointmentModal")?.click();
       
          var appointment:PatientAppointment = this.appointments.find(x=> x.ID == appointmentId)  as PatientAppointment;
          (document.getElementById('hdAppointmentId') as HTMLInputElement).value = appointmentId.toString();
          var dtString = format(toDate(appointment.ApptDate),'yyyy-MM-dd');
          (document.getElementById('txtAppointmentDate') as HTMLInputElement).value = dtString;
          (document.getElementById('txtAppointmentTime') as HTMLInputElement).value = appointment.ApptTime ;
          (document.getElementById('txtApptDoctorName') as HTMLInputElement).value = appointment.DoctorName;
          (document.getElementById('txtApptProcedure') as HTMLInputElement).value = appointment.TreatmentName;     
          this.CreateEvents(); 
          this.patientViewModel.PatientAppointments = this.appointments;
          this.patientService.setData(this.patientViewModel);
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