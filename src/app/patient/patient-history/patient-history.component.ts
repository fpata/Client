import { Component, Input } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent {
patient:Patient;

constructor(private patientService:PatientService){
  this.patientService.getData().subscribe((patientViewModel)=> {this.patient = patientViewModel.Patient; });
}
}
