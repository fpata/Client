import { HttpHeaders } from '@angular/common/http';

export interface CustomError {
    name?: string;
    isServerside?: boolean;
    message?: string;
    stack?: string;
    navigationUrl?: string;
    error?: any;
    headers?: HttpHeaders;
    ok?: boolean;
    status?: number;
    statusText?: string;
    requestedUrl?: string | null;

}
