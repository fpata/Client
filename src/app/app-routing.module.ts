import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientMasterComponent } from './patient/patient-master/patient-master.component';
import { DoctorAppointmentComponent } from './doctor/doctor-appointment/doctor-appointment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ 
  { path: 'dashboard', component: DashboardComponent },
  {path:'',component:LoginComponent},
{ path: 'patient', component: PatientMasterComponent },
{ path: 'patient/:Id', component: PatientMasterComponent },
{ path: 'doctor', component: DoctorAppointmentComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
