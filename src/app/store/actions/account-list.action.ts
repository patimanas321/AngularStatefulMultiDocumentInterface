import { AccountListViewModel } from "../../models/account-list-view-model";

export const UPDATE_ACCOUNTS = 'UPDATE_ACCOUNTS';

export class UpdateAccountsAction{
    readonly type = UPDATE_ACCOUNTS;
    constructor(public payload: AccountListViewModel){
        
    }
}

//Action Creator - Union Type
export type Action
    = UpdateAccountsAction