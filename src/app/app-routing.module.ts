import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientMasterComponent } from './patient/patient-master/patient-master.component';
import { DoctorAppointmentComponent } from './doctor/doctor-appointment/doctor-appointment.component';

const routes: Routes = [ 
  { path: '', component: PatientMasterComponent },
{ path: 'patient', component: PatientMasterComponent },
{ path: 'doctor', component: DoctorAppointmentComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
