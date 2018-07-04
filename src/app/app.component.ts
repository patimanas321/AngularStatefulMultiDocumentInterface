import { Component, OnInit } from '@angular/core';
import { Tab } from './models/tab';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './models/app-state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MdiDocument, MdiType } from './models/mdi';
import * as mdiAction from './store/actions/mdi.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  openedDocumentList: Observable<Tab[]>;
  selectedDocument: MdiDocument = null;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {

  }

  ngOnInit(): void {
    this.openedDocumentList = this.store.select(x => x.mdiDocuments)
      .pipe(map((data) => {
        let tabList = [];
        data.forEach(function (item: MdiDocument) {
          tabList.push(new Tab(item.id, item.label, '', '', item.isActive));
        });
        return tabList;
      }));
  }

  public sideNavList = [
    new Tab('1', 'Accounts', 'recent_actors', '/accounts', true),
    new Tab('2', 'Applications', 'how_to_vote', '/applications', false)
  ];

  public sideNavClicked(tab: Tab) {
    this.sideNavList.forEach(em => {
      if (em.id == tab.id)
        em.isActive = true;
      else
        em.isActive = false;
    });

    this.router.navigate([tab.path]);
  }

  public OnTopNavSelectionChange(tab: Tab) {
    var subs = this.store.select(x => x.mdiDocuments)
      .pipe(map((data) => {
        return data.filter((x) => x.id == tab.id)[0];
      })).subscribe((doc) => {
        if (doc.mdiType == MdiType.Account)
          this.router.navigate(['/account', tab.id]);
        else if (doc.mdiType == MdiType.Application)
          this.router.navigate(['/application', tab.id]);
      }, (err) => {
      }, () => {
        subs.unsubscribe();
        this.store.dispatch(new mdiAction.UpdateSlectedMdiAction(tab.id));
      });

    //Workout as above subscription complete callback doesnot execute with fake http service
    //Not requied in case of actual http call.
    setTimeout(() => {
      subs.unsubscribe();
      this.store.dispatch(new mdiAction.UpdateSlectedMdiAction(tab.id));
    }, 100);
  }
}
