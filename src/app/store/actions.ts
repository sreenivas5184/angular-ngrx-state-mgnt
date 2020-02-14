import { Action } from '@ngrx/store';

// tslint:disable-next-line:eofline
export const UPDATE_A = 'UPDATE_A';
export const UPDATE_B = 'UPDATE_B';
export class UpdateA implements Action {
    readonly type = UPDATE_A;
    constructor( public payload: number) {
    }
}
export class UpdateB implements Action {
    readonly type = UPDATE_B;
    constructor(public payload: number) {
    }
}

export type AllActions = UpdateA | UpdateB;
