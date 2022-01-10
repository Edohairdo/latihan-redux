
const initialState = {
    counter: 0
};

export default function counterReducer(state = initialState, action) {
    switch(action.type) {
        case "counter/increment":
            return {
                ...state,
                counter: state.counter +1 
            }

        case "counter/decrement":
                    return {
                        ...state,
                        counter: state.counter -1
            }

            case "counter/set-number":
                return {
                    ...state,
                    counter: action.payload
        }

            default:
            return state;
    }
};
