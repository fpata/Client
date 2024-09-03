import { Component,Input,NgModule } from '@angular/core';
import { Patient, PatientViewModel } from '../patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-personal-info',
  templateUrl: './patient-personal-info.component.html',
  styleUrls: ['./patient-personal-info.component.css']
})
export class PatientPersonalInfoComponent {

patient:Patient;
patientViewModel:PatientViewModel;
constructor(private patientService:PatientService){
  this.patientService.getData().subscribe((patientView)=> {
    this.patientViewModel = patientView;
    this.patient = patientView.Patient;
  })}


OnGenderChanged(arg0: number) {
  this.patient.Gender = arg0;
  console.log(this.patient.Gender)
  }
  
  CopyAddress() {
    this.patient.CorrAddress1 = this.patient.PermAddress1;
    this.patient.CorrAddress2 = this.patient.PermAddress2;
    this.patient.CorrCity = this.patient.PermCity;
    this.patient.CorrState = this.patient.PermState;
    this.patient.CorrCountry = this.patient.PermCountry;
    this.patient.CorrPostalCode = this.patient.PermPostalCode;
    }
}

