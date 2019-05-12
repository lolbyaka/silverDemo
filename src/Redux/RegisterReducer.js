import { SELECT_LEVEL, GENERATE_LEVELS, NEXT_STEP } from './RegisterActionsType';

const initialState = {
    userInfo: {
        selectedLevel: process.env.NODE_ENV === "development" ? parseInt(process.env.REACT_APP_TEST_LEVEL) : undefined,
        userName: process.env.NODE_ENV === "development" ? process.env.REACT_APP_TEST_USER : undefined,
        userEmail: process.env.NODE_ENV === "development" ? process.env.REACT_APP_TEST_EMAIL : undefined,
    },
    levels: {}
}

export default function registerReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_LEVEL:
            return {
                ...state,
                levels: state.levels.map((level, i ) => i === action.level ? 
                {...level, active: true}: {...level, active: false} ),
                userInfo: {
                    userName: state.userInfo.name,
                    userEmail: state.userInfo.email,
                    selectedLevel: (action.level + 1) % 2 !== 0 ? action.level + 2 : action.level + 1
                }
            }
        case NEXT_STEP:
            return {
                ...state,
                userInfo: {
                    userName: action.payload.name,
                    userEmail: action.payload.email,
                    selectedLevel: state.userInfo.selectedLevel
                }
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