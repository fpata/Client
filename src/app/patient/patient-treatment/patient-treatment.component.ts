import { Component, Input } from '@angular/core';
import { Patient, PatientTreatment } from '../patient';

@Component({
  selector: 'app-patient-treatment',
  templateUrl: './patient-treatment.component.html',
  styleUrls: ['./patient-treatment.component.css']
})
export class PatientTreatmentComponent {
  @Input() treatments:PatientTreatment[];
  constructor(){}
}
