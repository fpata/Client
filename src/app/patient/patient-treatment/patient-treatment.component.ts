import { Component, Input } from '@angular/core';
import { Patient, PatientTreatment, PatientTreatmentDetail } from '../patient';
import { ModalService } from 'src/app/common/modal/modal.service';
import { Element } from '@angular/compiler';

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
   var minVal = Math.min(...this.treatments.map(x => x.Id));
   patientTreatment.Id = minVal + (-1);
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
    treatmentDetail.Id = -1;
    treatmentDetail.PatientId = -1;
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

  DeleteTreatmentDetails(treatmentdetailsId: number,PatientTreatmentId: number) {
    throw new Error('Method not implemented.');
    }
    
    EditTreatmentDetails(treatmentdetailsId: number,PatientTreatmentId: number) {
    throw new Error('Method not implemented.');
    }
    
}