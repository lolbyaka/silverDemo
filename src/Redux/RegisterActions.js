import {GENERATE_LEVELS, SELECT_LEVEL, NEXT_STEP} from './RegisterActionsType';

export const selectLevel = (level) => {
    return {
        type: SELECT_LEVEL,
        level
    }
}

export const nextStep = (payload) => {
    return {
        type: NEXT_STEP,
        payload
    }
}

export const generateLevels = (count) => {
    return {
        type: GENERATE_LEVELS,
        count
    }
}