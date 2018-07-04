import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccountViewModel } from '../models/account-view-model';
import { AccountsService } from '../services/accounts.service';
import { AppState } from '../models/app-state';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { MdiDocument } from '../models/mdi';
import * as mdiAction from '../store/actions/mdi.action';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit, OnDestroy {
  
  routeParamSubscription: Subscription;
  accountId: number;
  data: AccountViewModel = new AccountViewModel();

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountsService,
    private store: Store<AppState>
  ) {
  }
  
  ngOnInit(): void {
    this.routeParamSubscription = this.route.params.subscribe(params => {
      this.accountId = +params['id'];

      //Document selection changed - update data in store, before loading new data
      if(this.data.actualData && this.accountId != this.data.actualData.id){
        this.updateDataInStore();
      }
      
      //Fetch new Tab Data from Store
      var subs = this.store.select(x => x.mdiDocuments).pipe(
        map((data) => {
          return data.filter(x => x.id == this.accountId.toString())[0];
        })
      ).subscribe((document: MdiDocument)=>{
        //If data is null in store, first load, get data from service
        if(document.data)
          this.data = document.data;
        else
          this.getAccountDataFromService();
      },(err) => {

      }, () => {
        subs.unsubscribe();
      });
    });
  }

  getAccountDataFromService(){
    this.accountService.getAccountByNumber(this.accountId).subscribe((data) => {
      this.data.actualData = data; 
    });
  }

  updateDataInStore(){
    this.store.dispatch(new mdiAction.UpdateMdiAction(this.data));
  }

  ngOnDestroy(): void {
    this.updateDataInStore();
    this.routeParamSubscription.unsubscribe();
  }
}
