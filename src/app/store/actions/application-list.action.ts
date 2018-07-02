import { ApplicationListViewModel } from "../../models/application-list-view-model";

export const UPDATE_APPLICATIONS = 'UPDATE_APPLICATIONS';

export class UpdateApplicationsAction{
    readonly type = UPDATE_APPLICATIONS;
    constructor(public payload: ApplicationListViewModel){
        
    }
}

//Action Creator - Union Type
export type Action
    = UpdateApplicationsAction