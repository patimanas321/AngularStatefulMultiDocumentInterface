import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit, OnDestroy {

  routeParamSubscription: Subscription;
  applicationId: string = '';

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.routeParamSubscription = this.route.params.subscribe(params => {
      this.applicationId = params['id']; 
      //update current data in Store
      //fetch data from service
    });
  }

  ngOnDestroy(): void {
    this.routeParamSubscription.unsubscribe();
  }
}
