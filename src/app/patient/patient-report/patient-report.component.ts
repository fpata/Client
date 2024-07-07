import { Component, Input } from '@angular/core';
import { PatientReport } from '../patient';

@Component({
  selector: 'app-patient-report',
  templateUrl: './patient-report.component.html',
  styleUrls: ['./patient-report.component.css']
})
export class PatientReportComponent {
@Input() reports:PatientReport[];

constructor(){}
}
