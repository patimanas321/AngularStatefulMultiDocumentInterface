import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { Application } from '../models/application';
import { dummyApplications } from './application-list';

@Injectable({
    providedIn: 'root'
})
export class ApplicationsService {
    private applicationsList: Application[] = dummyApplications;
    private _applicationsList$: BehaviorSubject<Application[]> = new BehaviorSubject(this.applicationsList);
    private applicationsList$: Observable<Application[]> = this._applicationsList$.asObservable();

    constructor(
        private snackBar: MatSnackBar
    ) { }

    public getAllApplications(): Observable<Application[]> {
        console.log('ApplicationsService - getAllApplications() called');
        return this.applicationsList$;
    }

    public getApplicationByNumber(id: number): Observable<Application> {
        console.log('AccountService - getAccountByNumber() called');
        var application = this.applicationsList.filter(x => x.number == id.toString())[0]
        let _application$: BehaviorSubject<Application> = new BehaviorSubject(application);
        return _application$.asObservable();
    }
}