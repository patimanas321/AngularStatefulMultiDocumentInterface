import * as mdiActions from '../actions/mdi.action';
import { MdiDocument } from '../../models/mdi';

let INITIAL_STATE: MdiDocument[] = [];

//Reducer is a pure function, Cannot change state, must create a whole new object.
export function MdiReducer(state = INITIAL_STATE, action: mdiActions.Action) {
    switch (action.type) {
        case mdiActions.ADD_MDI: {
            let docList = [];
            docList = docList.concat(state);
            //Add to document list only if same record is not opened.
            if (!checkIfDocumentAlreadyOpened(action.payload, docList))
                docList.push(action.payload);
            markSelectedTab(action.payload.id, docList);            
            return docList;
        }

        case mdiActions.UPDATE_MDI_DATA: {
            let docList = [];
            docList = docList.concat(state);
            updateMdiData(action.payload, docList);
            return docList;
        }

        case mdiActions.UPDATE_SELECTED_MDI: {
            let docList = [];
            docList = docList.concat(state);
            markSelectedTab(action.payload, docList);
            return docList;
        }

        default: {
            return state;
        }
    }
}

function checkIfDocumentAlreadyOpened(documentReq: MdiDocument, documentList: MdiDocument[]) {
    var filteredDocList = documentList.filter(doc => doc.id === documentReq.id && doc.mdiType == documentReq.mdiType);
    if (filteredDocList && filteredDocList.length > 0) {
        return true;
    }
    return false;
}

function markSelectedTab(selectedTabId: string, documentList: MdiDocument[]) {
    documentList.forEach(function (item: MdiDocument) {
        if (item.id == selectedTabId)
            item.isActive = true;
        else
            item.isActive = false;
    });

    console.log(documentList);
}

function updateMdiData(data: any, documentList: MdiDocument[]){
    var mdi = documentList.filter(x => x.id == data.actualData.number)[0];
    mdi.data = data;
    console.log(mdi);
}