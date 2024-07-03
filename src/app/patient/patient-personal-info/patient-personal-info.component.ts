import { Component,Input } from '@angular/core';
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

ngOnInit(){
  console.log("At child component layer = "+ this.patient.FirstName) ;
}

OnGenderChanged(arg0: number) {
  this.patient.Gender = arg0;
  }
  

}

