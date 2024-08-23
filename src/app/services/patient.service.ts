import { Injectable } from '@angular/core';
import { Patient, PatientSearch } from '../patient/patient';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ToastService } from '../common/toastcomponent/toaster.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  httpOptions:any = null;
  patient:Patient = new Patient();


  constructor(private httpClient:HttpClient, private toastService:ToastService) {
     this.httpOptions = {
      headers: new HttpHeaders( { 'Content-Type': 'application/json' })
   };
   }

  getPatientById(patientId:Number):Observable<any> {
    var url:string = "http://localhost:8088/patients/"+patientId;

  return this.httpClient.get<Patient>(url,this.httpOptions);
  }

  
  searchPatient(searchPatient:PatientSearch):PatientSearch[] {
    var url:string = "http://localhost:8088/patients/SearchByParams/";
    let searchResult:PatientSearch[] =[];
    this.httpClient.post(url,searchPatient,this.httpOptions).subscribe(response =>{
      Object.assign(searchResult,JSON.parse(JSON.stringify(response))as PatientSearch[])
    }, error => {
    this.toastService.showErrorToast('Error',error.name +' : '+ error.message);
  });
    return searchResult;
  }

  savePatient(patient:Patient) {
    var url:string = "http://localhost:8088/patients/";
    if(this.patient.Id == 0 || this.patient.Id == undefined) {
    this.httpClient.post(url, patient, this.httpOptions).subscribe(response => {
      console.log(JSON.stringify(response));
    },  error => {
     this.toastService.showErrorToast('Error',error.name +' : '+ error.message);
   });
  } else {
    this.httpClient.put(url, patient, this.httpOptions).subscribe(response => {
      console.log(JSON.stringify(response));
  }, error => {
   this.toastService.showErrorToast('Error',error.name +' : '+ error.message);
 });
}
  }

  deletePatient(patientId:number){
    var url:string = "http://localhost:8088/patients/?Id="+patientId;
    this.httpClient.delete(url, this.httpOptions).subscribe(response => {
      console.log(JSON.stringify(response));
    }, error => {
     this.toastService.showErrorToast('Error',error.name +' : '+ error.message);
   })
  }
}
