import * as CounterAction from './actions';
import { StateDataB } from './actionState';

const initialState: StateDataB = {
    /* count: 20,
    age : 27 */
    b : 1
};

export function reducerB(state = initialState, action: CounterAction.UpdateA | CounterAction.UpdateB) {
    // console.log('action ', action);
    console.log('action B', action);
    console.log('state B', state);
    switch (action.type) {
        case CounterAction.UPDATE_B:
            // state.count += action.payload;
            return {
                ...state,
                b: state.b + action.payload
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
