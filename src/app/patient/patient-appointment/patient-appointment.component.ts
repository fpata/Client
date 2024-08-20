import { Component, Input } from '@angular/core';
import { Patient, PatientAppointment } from '../patient';
import { CalendarComponent } from 'src/app/common/calendar/calendar.component';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent {
@Input() appointments:PatientAppointment[];
  constructor(){}
}
