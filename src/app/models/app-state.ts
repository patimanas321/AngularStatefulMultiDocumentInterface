import { AccountListViewModel } from "./account-list-view-model";
import { ApplicationListViewModel } from "./application-list-view-model";
import { MdiDocument } from "./mdi";


export interface AppState {
    accountList: AccountListViewModel;
    applicationList : ApplicationListViewModel;
    mdiDocuments: MdiDocument[];
}