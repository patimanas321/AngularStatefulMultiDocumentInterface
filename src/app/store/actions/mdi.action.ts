import { MdiDocument } from "../../models/mdi";

export const ADD_MDI = 'ADD_MDI';
export const DELETE_MDI = 'DELETE_MDI';
export const UPDATE_MDI_DATA = 'UPDATE_MDI_DATA';
export const UPDATE_SELECTED_MDI = 'UPDATE_SELECTED_MDI';

export class AddMdiAction{
    readonly type = ADD_MDI;
    constructor(public payload: MdiDocument){
        
    }
}

export class DeleteMdiAction{
    readonly type = DELETE_MDI;
    constructor(public payload: number){
        
    }
}

export class UpdateMdiAction{
    readonly type = UPDATE_MDI_DATA;
    constructor(public payload: any){
        
    }
}

export class UpdateSlectedMdiAction{
    readonly type = UPDATE_SELECTED_MDI;
    constructor(public payload: string){
        
    }
}

//Action Creator - Union Type
export type Action
    = AddMdiAction|
    DeleteMdiAction|
    UpdateMdiAction|
    UpdateSlectedMdiAction