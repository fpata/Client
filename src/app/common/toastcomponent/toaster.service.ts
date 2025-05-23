import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EventTypes,ToastEvent } from './toast-event';


@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toastEvents: Observable<ToastEvent>;
  private _toastEvents = new Subject<ToastEvent>();

  constructor() {
    this.toastEvents = this._toastEvents.asObservable();
  }

  /**
   * Show success toast notification.
   * @param title Toast title
   * @param message Toast message
   */
  showSuccessToast(title: string, message: string,delay:number=1000) {
    this._toastEvents.next({
      message,
      title,
      delay,
      type: EventTypes.Success,
    });
  }

  /**
   * Show info toast notification.
   * @param title Toast title
   * @param message Toast message
   */
  showInfoToast(title: string, message: string,delay:number =1000) {
    this._toastEvents.next({
      message,
      title,
      delay,
      type: EventTypes.Info,
    });
  }

  /**
   * Show warning toast notification.
   * @param title Toast title
   * @param message Toast message
   */
  showWarningToast(title: string, message: string,delay:number=1000) {
    this._toastEvents.next({
      message,
      title,
      delay,
      type: EventTypes.Warning,
    });
  }

  /**
   * Show error toast notification.
   * @param title Toast title
   * @param message Toast message
   */
  showErrorToast(title: string, message: string,delay:number=1000) {
    this._toastEvents.next({
      message,
      title,
      delay,
      type: EventTypes.Error,
    });
  }
}