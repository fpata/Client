import { Component, Input } from '@angular/core';
import { Patient, PatientTreatment, PatientTreatmentDetails } from '../patient';

@Component({
  selector: 'app-patient-treatment',
  templateUrl: './patient-treatment.component.html',
  styleUrls: ['./patient-treatment.component.css']
})
export class PatientTreatmentComponent {

  @Input() treatments:PatientTreatment[];
  constructor(){}


AddChiefComplain() {
   var patientTreatment:PatientTreatment = new PatientTreatment();
  this.treatments.push(patientTreatment);
  }

RemoveChiefComplain() {
  this.treatments.pop();
  }

  AddTreatmentDetails($event:any) {
    alert($event.id);
    var treatmentDetail:PatientTreatmentDetails = new PatientTreatmentDetails();
    if(this.treatments[0].PatientTreatmentDetails == undefined){
      this.treatments[0].PatientTreatmentDetails = new Array<PatientTreatmentDetails>();
    }
  this.treatments[0].PatientTreatmentDetails.push(treatmentDetail);
  }
}