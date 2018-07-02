import * as applicationsLitsActions from '../actions/application-list.action';
import { ApplicationListViewModel } from '../../models/application-list-view-model';

let INITIAL_STATE: ApplicationListViewModel = null;

//Reducer is a pure function, Cannot change state, must create a whole new object.
export function ApplicationListReducer(state = INITIAL_STATE, action: applicationsLitsActions.Action) {
    switch (action.type) {
        case applicationsLitsActions.UPDATE_APPLICATIONS: {
            return action.payload;
        }

        default:{
            return state;
        }
    }
}