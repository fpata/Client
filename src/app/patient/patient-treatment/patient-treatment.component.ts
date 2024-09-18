import { Component, Input } from '@angular/core';
import { Patient, PatientTreatment, PatientTreatmentDetail, PatientViewModel } from '../patient';
import { ModalService } from 'src/app/common/modal/modal.service';
import { Element } from '@angular/compiler';
import { ModalConfig } from 'src/app/common/modal/modal.component';
import { PatientService } from 'src/app/services/patient.service';
import {FilterPipe, SortByPipe} from './filterByTreatmentId.pipe';

@Component({
  selector: 'app-patient-treatment',
  templateUrl: './patient-treatment.component.html',
  styleUrls: ['./patient-treatment.component.css']
})

export class PatientTreatmentComponent {
  treatments:Array<PatientTreatment>;
  treatmentDetails:Array<PatientTreatmentDetail>;
  patientViewModel:PatientViewModel;
  constructor(private modalService:ModalService,private patientService:PatientService){
    this.patientService.getData().subscribe((patientViewModel)=> {
      this.treatments = patientViewModel.PatientTreatments;
      this.treatmentDetails = patientViewModel.PatientTreatmentDetails;
      this.patientViewModel = patientViewModel;
    });
   }


AddChiefComplain() {
   var ptTreatment:PatientTreatment = new PatientTreatment();
   var minVal = -1;
   if(this.treatments.length > 0)
   var minVal = Math.min(...this.treatments.map(x => x.ID));
   ptTreatment.ID = minVal + (-1);
   ptTreatment.PatientID = this.patientViewModel.Patient.ID;
   this.treatments.push(ptTreatment);
  }

RemoveChiefComplain(ID:number) {
  this.modalService.open({
    title:'Confirm Deletion',
    description:'',
    confirm:()=>{this.ConfirmRemove(ID);}
  });
  }


  ConfirmRemove(ID:number){

      this.treatments.splice(this.treatments.findIndex(x => x.ID === ID),1)
  }
  
  SaveTreatmentDetails() {
    var hdTreatmentIdElement:HTMLInputElement = document.getElementById('hdtreatmentid') as HTMLInputElement;
    var treatmentId:number = Number.parseInt(hdTreatmentIdElement.value);

    var hdtreatmentDetailIdElement:HTMLInputElement = document.getElementById('hdtreatmentdetailid') as HTMLInputElement;
    var treatmentDetail:PatientTreatmentDetail = new PatientTreatmentDetail();

    var IsEdit:boolean= false;
    if(this.treatmentDetails == undefined){
      this.treatmentDetails = new Array<PatientTreatmentDetail>();
    }

    if(hdtreatmentDetailIdElement.value == undefined || hdtreatmentDetailIdElement.value === ''){
    if(this.treatmentDetails.length === 0)   treatmentDetail.ID = -1;
    else  treatmentDetail.ID = (Math.min(...this.treatmentDetails.map(x => x.ID)) + (-1));
    } 
    else
    {
      var treatmentDetailVal =this.treatmentDetails.find(x=>x.ID.toString() == hdtreatmentDetailIdElement.value);
      treatmentDetail = treatmentDetailVal === undefined? new PatientTreatmentDetail():treatmentDetailVal;
      IsEdit = true;
    }

    treatmentDetail.PatientID = this.treatments[0].PatientID;
    treatmentDetail.PatientTreatmentID = treatmentId;
    treatmentDetail.Tooth=  (document.getElementById('txtTooth') as HTMLInputElement).value;
    treatmentDetail.Procedure = (document.getElementById('txtProcedure') as HTMLInputElement).value;
    treatmentDetail.Advice = (document.getElementById('txtAdvice') as HTMLInputElement).value;
    var dateVal = (document.getElementById('txtTreatmentDate') as HTMLInputElement).value;
    if(dateVal == undefined) dateVal = Date.toString();
    treatmentDetail.TreatmentDate = dateVal
    if(!IsEdit) this.treatmentDetails.push(treatmentDetail);
    hdtreatmentDetailIdElement.value = '';
  }

  AddTreatmentIdToPopup(ID:number){
    var hdIdElement:HTMLInputElement =  document.getElementById('hdtreatmentid') as HTMLInputElement;
    if(ID == undefined || ID == 0) ID = -1;
    hdIdElement.value = ID.toString();
  }

  DeleteTreatmentDetails(treatmentId: number,treatmentdetailId: number) {
    var index = this.treatmentDetails.findIndex(x=> x.ID === treatmentdetailId  && x.PatientTreatmentID  === treatmentId);
    this.treatmentDetails.splice(index,1);
  }
    
    EditTreatmentDetails(treatmentId: number, treatmentdetailId: number,) {
      document.getElementById("addTreatmentModal")?.click();
      
      var index = this.treatmentDetails.findIndex(x=> x.ID === treatmentdetailId && x.PatientTreatmentID === treatmentId);
      var treatmentDetail:PatientTreatmentDetail = this.treatmentDetails[index];
      (document.getElementById('txtTooth') as HTMLInputElement).value = treatmentDetail.Tooth;
      (document.getElementById('txtProcedure') as HTMLInputElement).value = treatmentDetail.Procedure ;
      (document.getElementById('txtAdvice') as HTMLInputElement).value = treatmentDetail.Advice;
      (document.getElementById('txtTreatmentDate') as HTMLInputElement).value = treatmentDetail.TreatmentDate;  
      (document.getElementById('hdtreatmentid') as HTMLInputElement).value = treatmentDetail.PatientTreatmentID.toString();   
      (document.getElementById('hdtreatmentdetailid') as HTMLInputElement).value = treatmentDetail.ID.toString();       
    }  

    ngOnInit(){
     }


    }