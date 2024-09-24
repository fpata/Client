import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientMasterComponent } from './patient/patient-master/patient-master.component';
import { DoctorAppointmentComponent } from './doctor/doctor-appointment/doctor-appointment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth.guard';
//import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';

const routes: Routes = [ 
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard]},
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
{ path: 'patient', component: PatientMasterComponent,canActivate: [AuthGuard] },
{ path: 'patient/:ID', component: PatientMasterComponent,canActivate: [AuthGuard] },
{ path: 'doctor', component: DoctorAppointmentComponent,canActivate: [AuthGuard] }];
//{ path: '**',pathMatch:'full', component: PagenotfoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
