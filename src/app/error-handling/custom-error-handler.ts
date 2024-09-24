import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CustomError } from './custom-error';

@Injectable({
    providedIn: 'root'
})
export class CustomErrorHandler implements ErrorHandler {

    constructor(private injector: Injector, private ngZone: NgZone) {
    }

    handleError(error: any): void {
        try {
            const customError = this.parseError(error);
            const router = this.injector.get(Router);

            if (NgZone.isInAngularZone()) {
                router.navigate(['/error'], { state: { lastError: customError } });
            } else {
                this.ngZone.run(() => {
                    router.navigate(['/error'], { state: { lastError: customError } });
                });
            }

         console.error(error);

        } catch (error) {
            console.error('Error occured within custom-error-handler.ts', error);
        }
    }

    private parseError(error: any): CustomError { // <-- REPLACE ANY WITH CUSTOM-ERROR
        let customError: CustomError; // <-- REPLACE ANY WITH CUSTOM-ERROR

        if (error instanceof HttpErrorResponse) {
            const httpErrorResponse = error as HttpErrorResponse;
            customError = {
                ...httpErrorResponse,
                isServerside: true,
                error: undefined,
                headers: undefined
            };
        } else {
            const clientError = error as Error;
            customError = { isServerside: false, message: clientError.message, name: clientError.name, stack: clientError.stack };
        }

        customError.navigationUrl = window.location.href;

        return customError;
    }

}
