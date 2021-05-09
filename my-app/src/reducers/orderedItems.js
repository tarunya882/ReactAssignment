import { SAVE_ORDERS1, SAVE_ORDERS2, SAVE_ORDERS3, TABLE1_TOTAL_PRICE } from "../actions";

const initialState = {
    savedOrder1: null,
    savedOrder2: null,
    savedOrder3: null,
    table1Price: null
};

const orderedItems = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_ORDERS1: {
            return {
                ...state,
                savedOrder1: action.data
            }
        }
        case SAVE_ORDERS2: {
            return {
                ...state,
                savedOrder2: action.data
            }
        }
        case SAVE_ORDERS3: {
            return {
                ...state,
                savedOrder3: action.data
            }
        }
        case TABLE1_TOTAL_PRICE: {
            return {
                ...state,
                table1Price: action.data
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

console.log(initialState.savedOrder1);

export default orderedItems