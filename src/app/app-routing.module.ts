import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { AccountsComponent } from "./acounts/accounts.component";
import { ApplicationsComponent } from "./applications/applications.component";
import { MdiComponent } from "./mdi/mdi.component";
import { HomeComponent } from "./home/home.component";
import { AccountComponent } from "./acount/account.component";
import { ApplicationComponent } from "./application/application.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { 
        path: 'accounts', 
        component: AccountsComponent 
      },
      { 
        path: 'applications', 
        component: ApplicationsComponent 
      },
      { 
        path: 'mdi/:id', 
        component: MdiComponent,
        children: [
          { path: 'account', component: AccountComponent },
          { path: 'application', component: ApplicationComponent },
          { path: '', redirectTo: 'accounts', pathMatch: 'full' },
          { path: '**', redirectTo: 'accounts', pathMatch: 'full' }
        ]
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
