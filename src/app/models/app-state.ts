import { AccountListViewModel } from "./account-list-view-model";
import { ApplicationListViewModel } from "./application-list-view-model";
import { Mdi } from "./mdi";


export interface AppState {
    accountList: AccountListViewModel;
    applicationList : ApplicationListViewModel;
    mdi: Mdi;
}