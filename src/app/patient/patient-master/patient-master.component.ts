import { Component, ViewChild } from '@angular/core';
import { Patient, PatientTreatment } from '../patient';
import { PatientService } from 'src/app/services/patient.service';
import { PatientPersonalInfoComponent } from '../patient-personal-info/patient-personal-info.component';
import { ToastService } from '../../common/toastcomponent/toaster.service';
@Component({
  selector: 'app-patient-master',
  templateUrl: './patient-master.component.html',
  styleUrls: ['./patient-master.component.css']
})

export class PatientMasterComponent {


patient:Patient;
isSearchTabSelected:boolean = true;
constructor(private patientService:PatientService, private toastService:ToastService) {
   
}

ngOnInit()
{
  this.patient = this.patientService.getPatientById(2);
  
}

ClearPatientInformation() {
  this.patient = new Patient();
  this.patient.Id = -1;
  this.patient.PatientTreatments = new Array<PatientTreatment>();
  var patientTreatment:PatientTreatment = new PatientTreatment();
  patientTreatment.Id = -1;
  this.patient.PatientTreatments.push(patientTreatment);

  }
  
  SavePatientInformation() {
    this.patientService.savePatient(this.patient);
    }


    DeletePatientInformation() {
   this.patientService.deletePatient(this.patient.Id);
    }
    

    tabSelectedEvent(event: Event) {
      var targetId = (event.currentTarget as Element).id;
      if(targetId.startsWith('tbPatientSearch')){
        this.isSearchTabSelected = true;
      }else {
        this.isSearchTabSelected = false;
      }

    }

    AddNewPatient() {
      this.ClearPatientInformation();
      document.getElementById("tbPersonalInfo-tab")?.click();
      }
      
}
