import { Component,NgModule } from '@angular/core';
import {Router} from "@angular/router"
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
  constructor(private patientService:PatientService, private toastService:ToastService, private router:Router){
    this.searchPatient = new PatientSearch();
    this.searchPatient.ID = 0;
    this.searchPatient.FirstName = '';
    this.searchPatient.LastName ='';
    this.searchPatient.PrimaryEmail ='';
    this.searchPatient.PermCity='';
    this.searchPatient.PrimaryPhone ='';
  }

  SearchPatient() {
    if(this.searchPatient.ID != undefined && this.searchPatient.ID != 0){
      document.getElementById("tbPersonalInfo-tab")?.click();
      this.router.navigate(['/patient', this.searchPatient.ID]);
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
  this.searchPatient.ID =0;
  this.searchPatient.PermCity = '';
  this.searchPatient.PrimaryEmail = '';
  this.searchPatient.PrimaryPhone = '';
  this.searchResult = [];
  this.clearSearchClicked= true;
  }

  OnPatientIdClick(patientId: Number) {
    this.searchPatient.ID = patientId;
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
