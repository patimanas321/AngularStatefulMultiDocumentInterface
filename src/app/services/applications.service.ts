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

    public addAccount(newAccount: Application): Observable<Application> {
        this.applicationsList.push(newAccount);
        this._applicationsList$.next(this.applicationsList);
        this.snackBar.open('Account Added Successfully', '', {
            duration: 2000,
        });

        return Observable.create(function (observer) {
            observer.next(newAccount);
        });
    }

    public deleteAccount(id: number): Observable<Application> {
        let deletedAccount = this.applicationsList.filter(acct => acct.id == id)[0];

        this.applicationsList = this.applicationsList.filter(acct => acct.id != id);
        this._applicationsList$.next(this.applicationsList);
        this.snackBar.open('Account Deleted Successfully', '', {
            duration: 2000,
        });
        return Observable.create(function (observer) {
            observer.next(deletedAccount);
        });
    }
}