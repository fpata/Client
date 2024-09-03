import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

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
import { ToasterContainerComponent } from './common/toastcomponent/toaster-container/toaster-container.component'
import { ToastComponent } from './common/toastcomponent/toast/toast.component';
import { ModalComponent } from './common/modal/modal.component';
import { CalendarComponent } from './common/calendar/calendar.component';
import { CalendarHeaderComponent } from './common/calendar/calender-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FilterPipe, SortByPipe } from './patient/patient-treatment/filterByTreatmentId.pipe';
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
    DoctorAppointmentComponent,
    ToastComponent,
    ToasterContainerComponent,
    ModalComponent,
    CalendarComponent,
    CalendarHeaderComponent,
    DashboardComponent,
    LoginComponent,
    FilterPipe, 
    SortByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
     provide: DateAdapter,
     useFactory: adapterFactory,
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
