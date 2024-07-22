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
  }
  

}

