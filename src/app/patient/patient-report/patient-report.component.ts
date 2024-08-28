import { Component, Input } from '@angular/core';
import { PatientReport } from '../patient';
import { format, toDate } from 'date-fns';

@Component({
  selector: 'app-patient-report',
  templateUrl: './patient-report.component.html',
  styleUrls: ['./patient-report.component.css']
})
export class PatientReportComponent {

@Input() reports:PatientReport[];

constructor(){}


EditReport(reportId: number) {
  document.getElementById("btnAddReport")?.click();
       
  var report:PatientReport = this.reports.find(x=> x.Id == reportId)  as PatientReport;
  (document.getElementById('txtReportFinding') as HTMLInputElement).value = report.ReportFinding;
  (document.getElementById('txtDoctorName') as HTMLInputElement).value = report.DoctorName;
  (document.getElementById('txtReportName') as HTMLInputElement).value = report.ReportName;
  var strDate =format(toDate(report.ReportDate),'yyyy-MM-dd');
  (document.getElementById('txtReportDate') as HTMLInputElement).value = strDate; 
  (document.getElementById('hdReportId') as HTMLInputElement).value = report.Id.toString(); 
  }

  DeleteReport(reportId: number) {
    var reportIndex = this.reports.findIndex(x=> x.Id === reportId);
    this.reports.splice(reportIndex,1);
  }

  SaveReport() {
    var report:PatientReport = new PatientReport();
    var reportId = (document.getElementById('hdReportId') as HTMLInputElement).value;
    var IsEdit:boolean = false;
    if(!(reportId == undefined || reportId == '')) {
      var rptId =  Number.parseInt(reportId)
      report = this.reports.find(x => x.Id == rptId) as PatientReport;
      IsEdit = true;
    }
    else {
      report.Id = (Math.min(...this.reports.map(x => x.Id)) + (-1));
    }
    report.ReportFinding =  (document.getElementById('txtReportFinding') as HTMLInputElement).value;
    report.DoctorName = (document.getElementById('txtDoctorName') as HTMLInputElement).value;
    report.ReportName =(document.getElementById('txtReportName') as HTMLInputElement).value;
    var dtStringValue= (document.getElementById('txtReportDate') as HTMLInputElement).value;
    if(dtStringValue == undefined || dtStringValue == ''){
      dtStringValue = format(Date.now(),'dd-MMM-yyyy');
    }else{
      dtStringValue = format(toDate(dtStringValue),'dd-MMM-yyyy');
    }
    report.ReportDate =dtStringValue;
    if(!IsEdit){
      this.reports.push(report);
    }
    
  }
}
