import { Component, Input } from '@angular/core';
import { Patient, PatientReport, PatientViewModel } from '../patient';
import { format, toDate } from 'date-fns';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-report',
  templateUrl: './patient-report.component.html',
  styleUrls: ['./patient-report.component.css']
})
export class PatientReportComponent {

reports:PatientReport[];
patientViewModel :PatientViewModel;
constructor(private patientService:PatientService){
  this.patientService.getData().subscribe((patientViewModel)=> {
    this.patientViewModel = patientViewModel;
    this.reports = patientViewModel.PatientReports;
  });
  
}


EditReport(reportId: number) {
  document.getElementById("btnAddReport")?.click();
       
  var report:PatientReport = this.reports.find(x=> x.ID == reportId)  as PatientReport;
  (document.getElementById('txtReportFinding') as HTMLInputElement).value = report.ReportFinding;
  (document.getElementById('txtDoctorName') as HTMLInputElement).value = report.DoctorName;
  (document.getElementById('txtReportName') as HTMLInputElement).value = report.ReportName;
  var strDate =format(toDate(report.ReportDate),'yyyy-MM-dd');
  (document.getElementById('txtReportDate') as HTMLInputElement).value = strDate; 
  (document.getElementById('hdReportId') as HTMLInputElement).value = report.ID.toString(); 
  }

  DeleteReport(reportId: number) {
    var reportIndex = this.reports.findIndex(x=> x.ID === reportId);
    this.reports.splice(reportIndex,1);
  }

  SaveReport() {
    var report:PatientReport = new PatientReport();
    var reportId = (document.getElementById('hdReportId') as HTMLInputElement).value;
    var IsEdit:boolean = false;
    ///is EditOperation
    if(!(reportId == undefined || reportId == '')) {
      var rptId =  Number.parseInt(reportId)
      report = this.reports.find(x => x.ID == rptId) as PatientReport;
      IsEdit = true;
    }
    else {
      if(this.reports == undefined ||  this.reports == null){
        this.reports = new Array<PatientReport>();
        report.ID = -1;
      }
      else {
      report.ID = (Math.min(...this.reports.map(x => x.ID)) + (-1));
      }
    }
    report.ReportFinding =  (document.getElementById('txtReportFinding') as HTMLInputElement).value;
    report.DoctorName = (document.getElementById('txtDoctorName') as HTMLInputElement).value;
    report.ReportName =(document.getElementById('txtReportName') as HTMLInputElement).value;
    var dtStringValue= (document.getElementById('txtReportDate') as HTMLInputElement).value;
    if(dtStringValue == undefined || dtStringValue == ''){
      dtStringValue = format(Date.now(),'yyyy-MM-dd');
    }else{
      dtStringValue = format(toDate(dtStringValue),'yyyy-MM-dd');
    }
    report.ReportDate =dtStringValue;
    if(!IsEdit){
      this.reports.push(report);
    }
    
  }
}
