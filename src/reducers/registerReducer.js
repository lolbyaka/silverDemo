import { SELECT_LEVEL, GENERATE_LEVELS, NEXT_STEP } from '../actions/registerActions';

const initialState = {
    selectedLevel: undefined,
    levels: {

    },
    userName: undefined,
    userEmail: undefined
}

export default function registerReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_LEVEL:
            return {
                ...state,
                levels: state.levels.map((level, i ) => i === action.level ? 
                {...level, active: true}: {...level, active: false} ),
                selectedLevel: (action.level + 1) % 2 !== 0 ? action.level + 2 : action.level + 1
            }
        case NEXT_STEP:
            return {
                ...state,
                userName: action.payload.name,
                userEmail: action.payload.email
            }
        case GENERATE_LEVELS:
            return {
                ...state,
                levels: Array.from(Array(action.count).keys()).map(level => {
                    return {
                        text: level + 1,
                        active: false
                        }
                })
            }
        default: 
            return state;
    }
}