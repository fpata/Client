import { Component,NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { PatientSearch } from '../patient';
import { PatientService } from 'src/app/services/patient.service';
import { ToastService } from 'src/app/common/toastcomponent/toaster.service';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent {


  searchPatient:PatientSearch;
  searchResult:PatientSearch[];
  searchLengthConstraintError:boolean = false;
  clearSearchClicked:boolean = false;
  constructor(private patientService:PatientService, private toastService:ToastService){
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
      this.validateSearchInput();
      if(!this.searchLengthConstraintError){
        this.searchResult = this.patientService.searchPatient(this.searchPatient) ;
         this.searchLengthConstraintError = false;
         this.clearSearchClicked = false;
        }
    }
}

clearSearch() {
  this.searchLengthConstraintError = false;
  this.searchPatient.FirstName ='';
  this.searchPatient.LastName ='';
  this.searchPatient.Id =0;
  this.searchPatient.PermCity = '';
  this.searchPatient.PrimaryEmail = '';
  this.searchPatient.PrimaryPhone = '';
  this.searchResult = [];
  this.clearSearchClicked= true;
  }

  OnPatientIdClick(patientId: Number) {
    this.searchPatient.Id = patientId;
    this.SearchPatient();
    }

    validateSearchInput(){
    
      if(this.searchPatient != null && this.searchPatient != undefined && this.searchPatient.FirstName?.length < 3 && this.searchPatient.LastName?.length < 3 &&
        this.searchPatient.PrimaryEmail?.length < 3 && this.searchPatient.PermCity?.length < 3 &&
        this.searchPatient.PrimaryPhone?.length < 3) {
          this.searchLengthConstraintError = true;
          this.clearSearchClicked= false;
      }else
      {
        this.searchLengthConstraintError = false;
        this.clearSearchClicked= true;
      }
  }
}
