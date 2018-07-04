import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { AccountListComponent } from "./account-list/account-list.component";
import { ApplicationListComponent } from "./application-list/application-list.component";
import { MdiComponent } from "./mdi/mdi.component";
import { AccountComponent } from "./acount/account.component";
import { ApplicationComponent } from "./application/application.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { 
        path: 'accounts', 
        component: AccountListComponent 
      },
      { 
        path: 'applications', 
        component: ApplicationListComponent 
      },
      { 
        path: 'account/:id', 
        component: AccountComponent
      },
      { 
        path: 'application/:id', 
        component: ApplicationComponent
      },
      { path: '', redirectTo: '/accounts', pathMatch: 'full' },
      { path: '**', redirectTo: '/accounts', pathMatch: 'full' }
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
