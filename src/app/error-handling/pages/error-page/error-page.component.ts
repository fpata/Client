import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomError } from '../../custom-error';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent {

  error?: CustomError;

  constructor(private router: Router) {
    // beware to call getCurrentNavigation() within the constructor, everything later
    // is to late, because the navigation step will be executed and the state is lost.
    const state = this.router.getCurrentNavigation()?.extras?.state;
    if (state) {
      this.error = state['lastError'] as CustomError;
    }
  }

  public restartApp(): void {
    window.location.href = '/';
  }

}
