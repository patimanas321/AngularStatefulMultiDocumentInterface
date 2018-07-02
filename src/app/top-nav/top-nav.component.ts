import { Component, OnInit, Input } from '@angular/core';
import { Tab } from '../models/tab';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  private _tabs: Tab[] = [];

  @Input()
  get tabs(): Tab[] {
    return this._tabs;
  }
  set tabs(tabs: Tab[]) {
    this._tabs = tabs;
    var mdi = new Tab(100, 'Tab 1', '', '/mdi/100', false);
    this._tabs.push(mdi);
  }

  public changeTab(tab:Tab){
    tab.isActive = true;
  }
}
