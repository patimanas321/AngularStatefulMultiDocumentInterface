import { Component, OnInit } from '@angular/core';
import { Tab } from '../models/tab';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(
    private router: Router
  ){
  }

  ngOnInit(): void {
  }

  public sideNavList = [
    new Tab(1, 'Accounts', '/home/accounts', true),
    new Tab(2, 'Applications', '/home/applications', false)
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
