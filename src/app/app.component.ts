import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToasterContainerComponent } from './common/toastcomponent/toaster-container/toaster-container.component';
import { ToastService } from './common/toastcomponent/toaster.service';
import { EventTypes } from './common/toastcomponent/toast-event';
import { AppConfigService } from './services/app-config.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clinic_client';

  EventTypes = EventTypes;

  constructor(private toastService: ToastService, private appConfigService: AppConfigService) {}

  showToast(type: EventTypes) {
    switch (type) {
      case EventTypes.Success:
        this.toastService.showSuccessToast('Success toast title', 'This is a success toast message.');
        break;
      case EventTypes.Warning:
        this.toastService.showWarningToast('Warning toast title', 'This is a warning toast message.');
        break;
      case EventTypes.Error:
        this.toastService.showErrorToast('Error toast title', 'This is an error toast message.');
        break;
      default:
        this.toastService.showInfoToast('Info toast title', 'This is an info toast message.');
        break;
    }
  }
  ngOnInit(){
    this.appConfigService.loadAppConfig();
  }
}
