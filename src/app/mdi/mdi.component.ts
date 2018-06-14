import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mdi',
  templateUrl: './mdi.component.html',
  styleUrls: ['./mdi.component.css']
})
export class MdiComponent implements OnInit, OnDestroy  {
 
  public id: number;
  private sub: any;

  constructor(
    private route: ActivatedRoute
  ){
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
