import { Injectable } from '@angular/core';
import { Patient, PatientSearch } from '../patient/patient';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  httpOptions:any = null;
  patient:Patient = new Patient();

  constructor(private httpClient:HttpClient) {
     this.httpOptions = {
      headers: new HttpHeaders( { 'Content-Type': 'application/json' })
   };
   }

  getPatientById(patientId:Number):Patient {
    var url:string = "http://localhost:8088/patients/"+patientId;

  this.httpClient.get(url,this.httpOptions).subscribe(response => {
   Object.assign(this.patient,JSON.parse(JSON.stringify(response)) as Patient);
  })
  return this.patient;
  }

  
  searchPatient(searchPatient:PatientSearch):PatientSearch[] {
    var url:string = "http://localhost:8088/patients/SearchByParams/";
    let searchResult:PatientSearch[] =[];
    this.httpClient.post(url,searchPatient,this.httpOptions).subscribe(response =>{
      Object.assign(searchResult,JSON.parse(JSON.stringify(response))as PatientSearch[])
    });
    return searchResult;
  }
}
