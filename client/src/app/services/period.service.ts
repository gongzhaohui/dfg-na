import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PeriodService {
    constructor() {}
    GetPeriod(date: Date) {
        return (
            date.getFullYear().toString() +
            ('00' + (date.getMonth() + 1)).slice(-2)
        );
    }
}
