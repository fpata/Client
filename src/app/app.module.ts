import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PatientMasterComponent } from './patient/patient-master/patient-master.component';
import { PatientAppointmentComponent } from './patient/patient-appointment/patient-appointment.component';
import { PatientHistoryComponent } from './patient/patient-history/patient-history.component';
import { PatientPersonalInfoComponent } from './patient/patient-personal-info/patient-personal-info.component';
import { PatientReportComponent } from './patient/patient-report/patient-report.component';
import { PatientSearchComponent } from './patient/patient-search/patient-search.component';
import { PatientTreatmentComponent } from './patient/patient-treatment/patient-treatment.component';
import { DoctorAppointmentComponent } from './doctor/doctor-appointment/doctor-appointment.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PatientMasterComponent,
    PatientAppointmentComponent,
    PatientHistoryComponent,
    PatientPersonalInfoComponent,
    PatientReportComponent,
    PatientSearchComponent,
    PatientTreatmentComponent,
    DoctorAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
