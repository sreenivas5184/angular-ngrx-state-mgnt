import * as CounterAction from './actions';
import { StateDataA } from './actionState';

const initialState: StateDataA = {
    /* count: 20,
    age : 27 */
    a : 1
};

export function reducerA(state: StateDataA = initialState, action: CounterAction.AllActions) {
    // console.log('action ', action);
    console.log('action A', action);
    console.log('state A', state);
    switch (action.type) {
        case CounterAction.UPDATE_A:
            // state.count += action.payload;
            return {
                ...state,
                a: state.a + action.payload
            };
        /* case CounterAction.SUB:
                // state.count += action.payload;
                return {
                    ...state,
                    count: state.a - action.payload
                }; */
        default:
            return state;
    }
}
