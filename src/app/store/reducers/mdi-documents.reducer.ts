import * as mdiActions from '../actions/mdi.action';
import { Mdi, MdiDocument } from '../../models/mdi';

let INITIAL_STATE: MdiDocument[] = [];

//Reducer is a pure function, Cannot change state, must create a whole new object.
export function MdiDocumentsReducer(state = INITIAL_STATE, action: mdiActions.Action) {
    switch (action.type) {
        case mdiActions.ADD_MDI: {
            let docList = [];
            docList = docList.concat(state);
            docList.push(action.payload);
            console.log(docList);
            return docList;
        }

        default:{
            return state;
        }
    }
}