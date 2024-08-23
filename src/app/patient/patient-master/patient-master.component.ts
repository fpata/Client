import { Component, ViewChild } from '@angular/core';
import { Patient, PatientAppointment, PatientTreatment } from '../patient';
import { PatientService } from 'src/app/services/patient.service';
import { PatientPersonalInfoComponent } from '../patient-personal-info/patient-personal-info.component';
import { ToastService } from '../../common/toastcomponent/toaster.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-patient-master',
  templateUrl: './patient-master.component.html',
  styleUrls: ['./patient-master.component.css']
})

export class PatientMasterComponent {


patient:Patient;
isSearchTabSelected:boolean = true;
constructor(private patientService:PatientService, private toastService:ToastService,private route: ActivatedRoute) {
   this.patient = new Patient();
   this.patient.PatientTreatments = new Array<PatientTreatment>();
   this.patient.PatientAppointments = new Array<PatientAppointment>();
}

ngOnInit()
{
  var Id:Number = Number.parseInt(this.route.snapshot.paramMap.get('Id') as string);
   this.patientService.getPatientById(Id).subscribe((response) => {
    this.patient = Object.assign(this.patient,JSON.parse(JSON.stringify(response)) as Patient);
    if(this.patient.Role === 'patient'){
      (document.getElementById('navPatientSearch') as HTMLElement).hidden = true;
      (document.getElementById('tbPatientSearch') as HTMLElement).hidden = true;
      document.getElementById("tbPersonalInfo-tab")?.click();
      
    }
   }, (error) => {
   this.toastService.showErrorToast('Error',error.name +' : '+ error.message);
   });
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
