import { Injectable } from '@angular/core';
import { Patient, PatientSearch, PatientViewModel } from '../patient/patient';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ToastService } from '../common/toastcomponent/toaster.service';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  httpOptions:any = null;
  private dataSubject: Subject<PatientViewModel> = new Subject<PatientViewModel>();

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

  savePatient(patientViewModel:PatientViewModel) {
    var url:string = "http://localhost:8088/patients/";
    if(patientViewModel.Patient.ID <= 0 || patientViewModel.Patient.ID == undefined) {
    this.httpClient.post(url, patientViewModel, this.httpOptions).subscribe(response => {
      console.log(JSON.stringify(response));
    },  error => {
     this.toastService.showErrorToast('Error',error.name +' : '+ error.message);
   });
  } else {
    this.httpClient.put(url, patientViewModel, this.httpOptions).subscribe(response => {
      console.log(JSON.stringify(response));
  }, error => {
   this.toastService.showErrorToast('Error',error.name +' : '+ error.message);
 });
}
}

  deletePatient(patientId:number){
    var url:string = "http://localhost:8088/patients/?ID="+patientId;
    this.httpClient.delete(url, this.httpOptions).subscribe(response => {
      console.log(JSON.stringify(response));
    }, error => {
     this.toastService.showErrorToast('Error',error.name +' : '+ error.message);
   })
  }


 

  setData(patientView: PatientViewModel) {
    this.dataSubject.next(patientView);
  }

  getData() {
    return this.dataSubject.asObservable();
  }
}

