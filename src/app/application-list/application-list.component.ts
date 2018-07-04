import { Component, OnInit } from '@angular/core';
import { BankAccount } from '../models/account';
import { ApplicationsService } from '../services/applications.service';
import { ApplicationListViewModel } from '../models/application-list-view-model';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app-state';
import * as applicationListAction from '../store/actions/application-list.action';
import * as mdiAction from '../store/actions/mdi.action';
import { MdiDocument, MdiType } from '../models/mdi';
import { Application } from '../models/application';
import { Router } from '@angular/router';

@Component({
  selector: 'application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  constructor(
    private applicationsService: ApplicationsService,
    private store: Store<AppState>,
    private router: Router
  ) {
  }

  data: ApplicationListViewModel = new ApplicationListViewModel();
  searchedText: string;

  ngOnInit(): void {
    this.store.select(x => x.applicationList).subscribe((data: ApplicationListViewModel) => {
      if (data)
        this.data = data;
      else
        this.fillPageData();
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(new applicationListAction.UpdateApplicationsAction(this.data));
  }

  updateFilter(event) {

  }

  clearSearch() {

  }

  openApplictaion(application: Application) {
    let newDoc = new MdiDocument(application.number, application.number, '', MdiType.Application, true, null);
    this.store.dispatch(new mdiAction.AddMdiAction(newDoc));
    this.router.navigate(['/application', application.number]);
  }

  addAccount() {

  }

  fillPageData() {
    this.applicationsService.getAllApplications().subscribe((data: Application[]) => {
      this.data.applicationList = data;
    }, (err) => {

    }, () => {

    });
  }
}
