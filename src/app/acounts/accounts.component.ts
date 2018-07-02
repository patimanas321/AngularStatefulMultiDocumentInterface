import { Component, OnInit, OnDestroy } from '@angular/core';
import { BankAccount } from '../models/account';
import { AccountsService } from '../services/accounts.service';
import { AccountListViewModel } from '../models/account-list-view-model';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app-state';
import * as accountListAction from '../store/actions/account-list.action';
import * as mdiAction from '../store/actions/mdi.action';
import { MdiDocument } from '../models/mdi';

@Component({
  selector: 'accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit, OnDestroy {
  
  constructor(
    private accountService: AccountsService,
    private store: Store<AppState>
  ){
  }

  data: AccountListViewModel = new AccountListViewModel();

  ngOnInit(): void {
    this.store.select( x => x.accountList).subscribe((data: AccountListViewModel)=>{
      if(data)
        this.data = data;
      else
        this.fillPageData();
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(new accountListAction.UpdateAccountsAction(this.data));
  }

  updateFilter(event){

  }

  clearSearch(){

  }

  openAccount(account: BankAccount){
    let newDoc = new MdiDocument(new Date().valueOf(), account.number.toString(), '', null);
    this.store.dispatch(new mdiAction.AddMdiAction(newDoc));
  }  

  addAccount(){

  }

  fillPageData(){
    this.accountService.getAllAccounts().subscribe((data: BankAccount[]) => {
      this.data.accountsList = data;
    }, (err) => {

    }, () => {

    });    
  }
}
