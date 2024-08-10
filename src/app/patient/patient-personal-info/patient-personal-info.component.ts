import { Component,Input,NgModule } from '@angular/core';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient-personal-info',
  templateUrl: './patient-personal-info.component.html',
  styleUrls: ['./patient-personal-info.component.css']
})
export class PatientPersonalInfoComponent {

@Input() patient:Patient;

constructor(){
}


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

