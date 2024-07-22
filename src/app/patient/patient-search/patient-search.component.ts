import { Component,NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { PatientSearch } from '../patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent {

  searchPatient:PatientSearch;
  searchResult:PatientSearch[];
  constructor(private patientService:PatientService){
    this.searchPatient = new PatientSearch();
    this.searchPatient.Id = 0;
    this.searchPatient.FirstName = '';
    this.searchPatient.LastName ='';
    this.searchPatient.PrimaryEmail ='';
    this.searchPatient.PermCity='';
    this.searchPatient.PrimaryPhone ='';
  }

  SearchPatient() {
    if(this.searchPatient.Id != undefined && this.searchPatient.Id != 0){
      this.patientService.getPatientById(this.searchPatient.Id);
      document.getElementById("tbPersonalInfo-tab")?.click();
    }
    else
    {
      this.searchResult = this.patientService.searchPatient(this.searchPatient)  
      console.log(this.searchResult)
    }

}

clearSearch() {
  this.searchPatient.Id = 0;
  this.searchPatient.FirstName = '';
  this.searchPatient.LastName ='';
  this.searchPatient.PrimaryEmail ='';
  this.searchPatient.PermCity='';
  this.searchPatient.PrimaryPhone ='';
  }

  OnPatientIdClick(patientId: Number) {
    this.searchPatient.Id = patientId;
    this.SearchPatient();
    }

}
