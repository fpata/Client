

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastEvent } from '../toast-event';
import { ToastService } from '../toaster.service';

@Component({
  selector: 'app-toaster-container',
  templateUrl:'./toaster-container.component.html' ,
  styleUrls: ['./toaster-container.component.css']
})
export class ToasterContainerComponent implements OnInit {

  currentToasts: ToastEvent[] = [];

  constructor(
    private toastService: ToastService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscribeToToasts();
  }

  subscribeToToasts() {
    this.toastService.toastEvents.subscribe((toasts) => {
      const currentToast: ToastEvent = {
        type: toasts.type,
        title: toasts.title,
        delay:toasts.delay,
        message: toasts.message,
      };
      this.currentToasts.push(currentToast);
      this.cdr.detectChanges();
    });
  }

  dispose(index: number) {
    this.currentToasts.splice(index, 1);
    this.cdr.detectChanges();
  }
}

