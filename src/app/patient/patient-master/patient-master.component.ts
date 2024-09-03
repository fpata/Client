import { Component, ViewChild } from '@angular/core';
import { Patient, PatientAppointment, PatientReport, PatientTreatment, PatientTreatmentDetail, PatientViewModel } from '../patient';
import { PatientService } from 'src/app/services/patient.service';
import { ToastService } from '../../common/toastcomponent/toaster.service';
import { ActivatedRoute,Router } from '@angular/router'
 

@Component({
  selector: 'app-patient-master',
  templateUrl: './patient-master.component.html',
  styleUrls: ['./patient-master.component.css']
})

export class PatientMasterComponent {

patient:Patient;
patientViewModel:PatientViewModel;

isSearchTabSelected:boolean = true;

constructor(private patientService:PatientService, private toastService:ToastService,
            private route: ActivatedRoute, private router:Router) {
   this.patientService.getData().subscribe( viewModel => {
    if(viewModel == undefined || viewModel == null)
    {
      this.patientViewModel = new PatientViewModel();
      this.patient = new Patient();
      this.patientViewModel.Patient = this.patient;
      this.patientService.setData(this.patientViewModel);
    } else {
    this.patientViewModel = viewModel;
   this.patient = this.patientViewModel.Patient;
            }});
   }


ngOnInit()
{
  var ID:number = -1;
  this.route.paramMap.subscribe( paramMap => {
   var strId = paramMap.get('ID') ;
    if(strId == undefined || strId == ''){
      ID = -1;
    }
    else{
      ID = Number.parseInt(strId);
    }
  });
 if(ID > 0){
  this.patientService.getPatientById(ID).subscribe({
    next: (response) => {
      if(this.patientViewModel == undefined || this.patientViewModel == null) {
        this.patientViewModel = new PatientViewModel();
        this.patient = new Patient();
      }
      this.patientViewModel = Object.assign(this.patientViewModel,JSON.parse(JSON.stringify(response)) as PatientViewModel);
      this.patientService.setData(this.patientViewModel);
      this.patient = this.patientViewModel.Patient;
    if(this.patient.Role === 'patient'){
      (document.getElementById('navPatientSearch') as HTMLElement).hidden = true;
      (document.getElementById('tbPatientSearch') as HTMLElement).hidden = true;
      document.getElementById("tbPersonalInfo-tab")?.click();
      
    }
   }, error: (error)=> {
   this.toastService.showErrorToast('Error',error.name +' : '+ error.message);
   },
});
 }
}

ClearPatientInformation() {
  var patientModel:PatientViewModel = new PatientViewModel();
  patientModel.Patient = new Patient();
  patientModel.Patient.ID = -1;
  patientModel.PatientTreatments = new Array<PatientTreatment>();
  patientModel.PatientReports = new Array<PatientReport>();
  patientModel.PatientTreatments = new Array<PatientTreatment>();
  patientModel.PatientTreatmentDetails = new Array<PatientTreatmentDetail>();
  this.patientService.setData(patientModel);
  this.router.navigate(['/patient'])
  }
  
  SavePatientInformation() {
    this.patientService.savePatient(this.patientViewModel);
    }


    DeletePatientInformation() {
   this.patientService.deletePatient(this.patient.ID);
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
