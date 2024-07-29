import { Component, ViewChild } from '@angular/core';
import { Patient, PatientTreatment } from '../patient';
import { PatientService } from 'src/app/services/patient.service';
import { PatientPersonalInfoComponent } from '../patient-personal-info/patient-personal-info.component';
import { ToastService } from '../../common/toaster.service';
@Component({
  selector: 'app-patient-master',
  templateUrl: './patient-master.component.html',
  styleUrls: ['./patient-master.component.css']
})

export class PatientMasterComponent {

patient:Patient;
constructor(private patientService:PatientService, private toastService:ToastService) {
   
}

ngOnInit()
{
  this.patient = this.patientService.getPatientById(2);
  
}

ClearPatientInformation() {
  this.patient = new Patient();
  this.patient.PatientTreatments = new Array<PatientTreatment>();
  this.patient.PatientTreatments.push(new PatientTreatment());
  }
  
  SavePatientInformation() {
    this.patientService.savePatient(this.patient);
    }


    DeletePatientInformation() {
   this.patientService.deletePatient(this.patient.Id);
    }
    
}
