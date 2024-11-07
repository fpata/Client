import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfig: any;
  private http : HttpClient;
  
  constructor(http: HttpClient) {
	this.http = http;
  }

  loadAppConfig() {
    return this.http.get('/assets/app-settings.json')
      .toPromise()
      .then(config => {
        this.appConfig = config;
      });
  }

  get patientServiceBaseURL() : string {
    return this.appConfig.PatientServiceBaseURL;
  }

  get dashboardServiceBaseURL() : string {
    return this.appConfig.DashboardServiceBaseURL;
  }

  get loginServiceBaseURL() : string {
    return this.appConfig.LoginServiceBaseURL;
  }
  
}