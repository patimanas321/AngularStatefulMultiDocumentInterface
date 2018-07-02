import * as mdiActions from '../actions/mdi.action';
import { Mdi } from '../../models/mdi';

let INITIAL_STATE: number = 0;

//Reducer is a pure function, Cannot change state, must create a whole new object.
export function MdiSelectedTabReducer(state = INITIAL_STATE, action: mdiActions.Action) {
    switch (action.type) {
        case mdiActions.UPDATE_SELECTED_MDI: {
            return action.payload;
        }

        default:{
            return state;
        }
    }
}