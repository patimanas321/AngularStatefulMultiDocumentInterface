import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { BankAccount, Transaction, Address, Notification } from '../models/account';

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

const dummyAccounts = [
    new BankAccount(
        1,
        '987801',
        'John Doe',
        98875664.90,
        'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]
    ),
    new BankAccount(2, '987802', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(3, '987803', 'Sue Birtwistle', 20875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]
    ),
    new BankAccount(2, '987804', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(2, '987805', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(2, '987806', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(2, '987807', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(2, '987808', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(2, '987809', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(2, '987810', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(11, '987811', 'Malcolm Terris', 988456764.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]
    ),
    new BankAccount(2, '987812', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(2, '987813', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(2, '987814', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(2, '987815', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
   new BankAccount(2, '987816', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(2, '987817', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(2, '987818', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(2, '987820', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(2, '987821', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(2, '987822', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(2, '987823', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(2, '987824', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(2, '987825', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(24, '987826', 'Fitz-Lloyd Smith', 234664.90, 'Inactive',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]
    ),
    new BankAccount(2, '987827', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ]),
    new BankAccount(2, '987828', 'Rupert Scrivener', 10875664.90, 'Active',
        [
            new Transaction(1, '12346322454690', 'Nigel Plaskitt', new Date(2014, 2, 2), 2000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2013, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Felicity Gibson', new Date(2012, 4, 9), 4000)
        ],
        [
            new Transaction(1, '12346322454690', 'Sue Birtwistle', new Date(2015, 2, 2), 12000),
            new Transaction(1, '45224546904656', 'Vincent Brimble', new Date(2014, 4, 9), 4000),
            new Transaction(1, '86754656789904', 'Bryonie Pritchard', new Date(2013, 4, 9), 4000)
        ],
        new Address('Abc Colony', 'High Street', 'Pune', 'Maharastra', '56789776'),
        [
            new Notification('Please verify Your address.', new Date(2011, 2, 2)),
            new Notification('Please submit Your documents.', new Date(2011, 3, 2))
        ])
];