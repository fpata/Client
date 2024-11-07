

import { Injectable } from '@angular/core';
import { PatientAppointment } from '../patient/patient';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ToastService } from '../common/toastcomponent/toaster.service';
import { Observable } from 'rxjs';
import { AppConfigService } from './app-config.service';
@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    httpOptions: any = null;

    constructor(private httpClient: HttpClient, private toastService: ToastService, private  appConfigService: AppConfigService) {
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }

    GetAppiontments(userId: number, StartDate: string, EndDate: string): Observable<any> {
        var PatientAppointments: PatientAppointment[] = new Array<PatientAppointment>();
        var url: string = this.appConfigService.dashboardServiceBaseURL + userId + "&StartDate=" + StartDate + "&EndDate=" + EndDate;
        return this.httpClient.get<PatientAppointment[]>(url, this.httpOptions);
    }
}