import { Component } from '@angular/core';
import { Tab } from './models/tab';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private router: Router
  ){

  }

  public sideNavList = [
    new Tab(1, 'Accounts', 'recent_actors', '/accounts', true),
    new Tab(2, 'Applications', 'how_to_vote', '/applications', false)
  ];

  public sideNavClicked(tab: Tab){
    this.sideNavList.forEach(em => {
      if(em.id == tab.id)
        em.isActive = true;
      else  
        em.isActive = false;
    });

    this.router.navigate([tab.path]);
  }
}
