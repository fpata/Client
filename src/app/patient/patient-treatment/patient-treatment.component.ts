import { Component, Input } from '@angular/core';
import { Patient, PatientTreatment, PatientTreatmentDetail } from '../patient';
import { ModalService } from 'src/app/common/modal/modal.service';
import { Element } from '@angular/compiler';
import { ModalConfig } from 'src/app/common/modal/modal.component';

@Component({
  selector: 'app-patient-treatment',
  templateUrl: './patient-treatment.component.html',
  styleUrls: ['./patient-treatment.component.css']
})
export class PatientTreatmentComponent {


  @Input() treatments:PatientTreatment[];
  constructor(private modalService:ModalService){}


AddChiefComplain() {
   var patientTreatment:PatientTreatment = new PatientTreatment();
   if(this.treatments === undefined || this.treatments?.length === 0){
    this.treatments = new Array<PatientTreatment>();
     patientTreatment.Id = -1;
   }
   else{
   var minVal = Math.min(...this.treatments.map(x => x.Id));
   patientTreatment.Id = --minVal;
   }
  this.treatments.push(patientTreatment);
  }

RemoveChiefComplain(id:number) {
  this.modalService.open({
    title:'Confirm Deletion',
    description:'',
    confirm:()=>{this.ConfirmRemove(id);}
  });
  }


  ConfirmRemove(id:number){

      this.treatments.splice(this.treatments.findIndex(x => x.Id === id),1)
  }
  
  AddTreatmentDetails() {
    var hdIdElement:HTMLInputElement = document.getElementById('hdtreatmentid') as HTMLInputElement;
    var treatmentId:number = Number.parseInt(hdIdElement.value);
    var index = this.treatments.findIndex(x => x.Id == treatmentId);
    if(this.treatments[index].PatientTreatmentDetails == undefined){
      this.treatments[index].PatientTreatmentDetails = new Array<PatientTreatmentDetail>();
    }
    var treatmentDetail:PatientTreatmentDetail = new PatientTreatmentDetail();
    if(this.treatments[index].PatientTreatmentDetails.length === 0)
      treatmentDetail.Id = -1;
    else  
    treatmentDetail.Id = (Math.min(...this.treatments[index].PatientTreatmentDetails.map(x => x.Id)) + (-1));
    
    treatmentDetail.PatientId = this.treatments[0].PatientId;
    treatmentDetail.PatientTreatmentId = treatmentId;
    treatmentDetail.Tooth=  (document.getElementById('txtTooth') as HTMLInputElement).value;
    treatmentDetail.Procedure = (document.getElementById('txtProcedure') as HTMLInputElement).value;
    treatmentDetail.Advice = (document.getElementById('txtAdvice') as HTMLInputElement).value;
    treatmentDetail.TreatmentDate = Date.now().toString();
    this.treatments[index].PatientTreatmentDetails.push(treatmentDetail);
  }

  AddTreatmentIdToPopup(Id:string){
    var hdIdElement:HTMLInputElement =  document.getElementById('hdtreatmentid') as HTMLInputElement;
    hdIdElement.value = Id;
  }

  DeleteTreatmentDetails(treatmentId: number,treatmentdetailId: number) {
    var patientTreatmentIndex = this.treatments.findIndex(x=> x.Id === treatmentId);
    var index = this.treatments[patientTreatmentIndex].PatientTreatmentDetails.findIndex(x=> x.Id === treatmentdetailId);
    this.treatments[patientTreatmentIndex].PatientTreatmentDetails.splice(index,1);
  }
    
    EditTreatmentDetails(treatmentId: number, treatmentdetailId: number,) {
      document.getElementById("addTreatmentModal")?.click();
      var patientTreatmentIndex = this.treatments.findIndex(x=> x.Id === treatmentId);
      var index = this.treatments[patientTreatmentIndex].PatientTreatmentDetails.findIndex(x=> x.Id === treatmentdetailId);
      var treatmentDetail:PatientTreatmentDetail = this.treatments[patientTreatmentIndex].PatientTreatmentDetails[index];

      (document.getElementById('txtTooth') as HTMLInputElement).value = treatmentDetail.Tooth;
      (document.getElementById('txtProcedure') as HTMLInputElement).value = treatmentDetail.Procedure ;
      (document.getElementById('txtAdvice') as HTMLInputElement).value = treatmentDetail.Advice;
      (document.getElementById('txtTreatmentDate') as HTMLInputElement).value = treatmentDetail.TreatmentDate;      
    }
}