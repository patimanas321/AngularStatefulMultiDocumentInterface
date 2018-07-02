import { AccountsListReducer } from "./account-list.reducer";
import { ApplicationListReducer } from "./application-list.reducer";
import { MdiDocumentsReducer } from "./mdi-documents.reducer";
import { MdiSelectedTabReducer } from "./mdi-selected-tab.reducer";
import { combineReducers } from "@ngrx/store";

export const rootReducer = 
{
    accountList: AccountsListReducer,
    applicationList: ApplicationListReducer,
    mdi: combineReducers({
        selectedDocument: MdiSelectedTabReducer,
        ducumentsList: MdiDocumentsReducer
    })
}