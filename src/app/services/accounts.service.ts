import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { BankAccount } from '../models/account';

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

const dummyAccounts = [
    new BankAccount(1, '86754656789986', 'John Doe', 98875664.90, 'Active'),
    new BankAccount(2, '86754656789901', 'Rupert Scrivener', 10875664.90, 'Active'),
    new BankAccount(3, '86754656789902', 'Sue Birtwistle', 20875664.90, 'Active'),
    new BankAccount(5, '86754656789903', 'Clive Swift', 23875664.90, 'Active'),
    new BankAccount(6, '86754656789904', 'Ridgewell Hawkes', 54875664.90, 'Active'),
    new BankAccount(7, '86754656789905', 'Vincent Brimble', 56875664.90, 'Inactive'),
    new BankAccount(8, '86754656789906', 'Talfryn Thomas', 98845664.90, 'Active'),
    new BankAccount(9, '86754656789907', 'Nigel Plaskitt', 9887564.90, 'Active'),
    new BankAccount(10, '86754656789908', 'Felicity Gibson', 9000664.90, 'Active'),
    new BankAccount(11, '86754656789909', 'Malcolm Terris', 988456764.90, 'Active'),
    new BankAccount(12, '86754656789910', 'Nicholas Hawtrey', 9804.90, 'Active'),
    new BankAccount(13, '86754656789911', 'Royston Farrell', 235664.90, 'Active'),
    new BankAccount(14, '86754656789912', 'Prentis Hancock', 3664.90, 'Inactive'),
    new BankAccount(15, '86754656789913', 'Terrance Dicks', 12455664.90, 'Active'),
    new BankAccount(16, '86754656789914', 'Nigel Humphreys', 325664.90, 'Active'),
    new BankAccount(17, '86754656789915', 'Mervyn Pinfield', 56875664.90, 'Active'),
    new BankAccount(18, '86754656789916', 'Valerie Pye', 3664.90, 'Active'),
    new BankAccount(19, '86754656789917', 'Bryonie Pritchard', 64.90, 'Inactive'),
    new BankAccount(20, '86754656789918', 'Pat Pennelegion', 75664.90, 'Active'),
    new BankAccount(21, '86754656789919', 'Eunice Montjoy', 98804.90, 'Active'),
    new BankAccount(22, '86754656789920', 'Antonia Pemberton', 78964.90, 'Active'),
    new BankAccount(23, '86754656789921', 'Cedric Kerr', 234.90, 'Active'),
    new BankAccount(24, '86754656789922', 'Fitz-Lloyd Smith', 234664.90, 'Inactive'),
    new BankAccount(25, '86754656789923', 'Gillian Tullett', 87664.90, 'Active')
];