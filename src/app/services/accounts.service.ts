import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { BankAccount } from '../models/account';
import { dummyAccounts } from './accounts-list';

@Injectable({
    providedIn: 'root'
})
export class AccountsService {
    private accountsList: BankAccount[] = dummyAccounts;
    private _accountsList$: BehaviorSubject<BankAccount[]> = new BehaviorSubject(this.accountsList);
    private accountsList$: Observable<BankAccount[]> = this._accountsList$.asObservable();

    constructor(
        private snackBar: MatSnackBar
    ) { }

    public getAllAccounts(): Observable<BankAccount[]> {
        console.log('AccountService - getAllAccounts() called');
        return this.accountsList$;
    }

    public getAccountByNumber(id: number): Observable<BankAccount> {
        console.log('AccountService - getAccountByNumber() called');
        var account = this.accountsList.filter(x => x.number == id.toString())[0]
        let _account$: BehaviorSubject<BankAccount> = new BehaviorSubject(account);
        return _account$.asObservable();
    }

    public addAccount(newAccount: BankAccount): Observable<BankAccount> {
        this.accountsList.push(newAccount);
        this._accountsList$.next(this.accountsList);
        this.snackBar.open('Account Added Successfully', '', {
            duration: 2000,
        });

        return Observable.create(function (observer) {
            observer.next(newAccount);
        });
    }

    public deleteAccount(id: number): Observable<BankAccount> {
        let deletedAccount = this.accountsList.filter(acct => acct.id == id)[0];

        this.accountsList = this.accountsList.filter(acct => acct.id != id);
        this._accountsList$.next(this.accountsList);
        this.snackBar.open('Account Deleted Successfully', '', {
            duration: 2000,
        });
        return Observable.create(function (observer) {
            observer.next(deletedAccount);
        });
    }
}