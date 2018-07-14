import { INC, DEC } from "./actionTypes";

const initialState = {counter: 1};
const Reducer = (state=initialState, action) => {
    switch(action.type){
        case INC:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DEC:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
};

export default Reducer;