import { AccountsListReducer } from "./account-list.reducer";
import { ApplicationListReducer } from "./application-list.reducer";
import { MdiReducer } from "./mdi.reducer";

export const rootReducer = 
{
    accountList: AccountsListReducer,
    applicationList: ApplicationListReducer,
    mdiDocuments: MdiReducer
}