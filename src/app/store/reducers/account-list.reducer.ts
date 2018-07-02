import * as accountsLitsActions from '../actions/account-list.action';
import { AccountListViewModel } from '../../models/account-list-view-model';

let INITIAL_STATE: AccountListViewModel = null;

//Reducer is a pure function, Cannot change state, must create a whole new object.
export function AccountsListReducer(state = INITIAL_STATE, action: accountsLitsActions.Action) {
    switch (action.type) {
        case accountsLitsActions.UPDATE_ACCOUNTS: {
            return action.payload;
        }

        default:{
            return state;
        }
    }
}