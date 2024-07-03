import { Component } from '@angular/core';
import { PatientSearch } from '../patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent {


  searchPatient:PatientSearch;

  constructor(private patientService:PatientService){
    this.searchPatient = new PatientSearch();
    this.searchPatient.Id = 0;
    this.searchPatient.FirstName = '';
    this.searchPatient.LastName ='';
    this.searchPatient.PrimaryEmail ='';
    this.searchPatient.City='';
    this.searchPatient.PrimaryPhone ='';
  }

  SearchPatient() {
    if(this.searchPatient.Id != undefined && this.searchPatient.Id != 0){
      this.patientService.getPatientById(this.searchPatient.Id);
    }
    else
    {
      this.patientService.searchPatient(this.searchPatient)  
    }

}

clearSearch() {
  this.searchPatient.Id = 0;
  this.searchPatient.FirstName = '';
  this.searchPatient.LastName ='';
  this.searchPatient.PrimaryEmail ='';
  this.searchPatient.City='';
  this.searchPatient.PrimaryPhone ='';
  }

}
