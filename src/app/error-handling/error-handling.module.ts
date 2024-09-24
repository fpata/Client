import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ErrorHandlingRoutingModule } from './error-handling-routing.module';
import { CustomErrorHandler } from './custom-error-handler';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './http-interceptors/error.interceptor';



@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    ErrorHandlingRoutingModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: CustomErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class ErrorHandlingModule { }
