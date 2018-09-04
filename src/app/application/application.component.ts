import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApplicationViewModel } from '../models/application-view-model';
import { ApplicationsService } from '../services/applications.service';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app-state';
import { map } from 'rxjs/operators';
import { MdiDocument } from '../models/mdi';
import * as mdiAction from '../store/actions/mdi.action';

@Component({
  selector: 'application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit, OnDestroy {

  routeParamSubscription: Subscription;
  applicationId: number;
  data: ApplicationViewModel = new ApplicationViewModel();

  constructor(
    private route: ActivatedRoute,
    private applicationService: ApplicationsService,
    private store: Store<AppState>
  ) {
  }
  
  ngOnInit(): void {
    this.routeParamSubscription = this.route.params.subscribe(params => {
      this.applicationId = +params['id'];

      //Document selection changed - update data in store, before loading new data
      if(this.data.actualData && this.applicationId != this.data.actualData.id){
        this.updateDataInStore();
      }
      
      //Fetch new Tab Data from Store
      var subs = this.store.select(x => x.mdiDocuments).pipe(
        map((data) => {
          return data.filter(x => x.id == this.applicationId.toString())[0];
        })
      ).subscribe((document: MdiDocument)=>{
        //If data is null in store, first load, get data from service
        if(document && document.data)
          this.data = document.data;
        else
          this.getApplicationDataFromService();
      },(err) => {

      }, () => {
        subs.unsubscribe();
      });
    });
  }

  getApplicationDataFromService(){
    this.applicationService.getApplicationByNumber(this.applicationId).subscribe((data) => {
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
