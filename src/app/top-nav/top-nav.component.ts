import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Tab } from '../models/tab';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNavComponent {

  @Input()
  public Tabs: Tab[] = [];

  @Output() 
  OnTabChange: EventEmitter<Tab> = new EventEmitter();

  public changeTab(tab: Tab) {
    this.OnTabChange.emit(tab);
  }
}
