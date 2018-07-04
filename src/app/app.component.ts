import { Component, OnInit } from '@angular/core';
import { Tab } from './models/tab';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './models/app-state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MdiDocument, MdiType } from './models/mdi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  openedDocumentList: Observable<any>;
  selectedOpenedDocument: Observable<string>;

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

    this.store.select(x => x.mdiDocuments)
      .pipe(map((data) => {
        let filteredTabs = data.filter(x => x.isActive = true);
        if (filteredTabs && filteredTabs.length > 0)
          return filteredTabs[0];
        else
          return null;
      })).subscribe(data => {
        if (data) {
          switch (data.mdiType) {
            case MdiType.Account: {
              this.router.navigate(['/account', data.id]);
              break;
            }
            case MdiType.Application: {
              this.router.navigate(['/application', data.id]);
              break;
            }
            default: {
              //statements; 
              break;
            }
          }
        }
      });
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

  public OnTapNavSelectionChange(tab: Tab) {

  }
}
