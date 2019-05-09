export const GENERATE_LEVELS = 'GENERATE_LEVELS';
export const SELECT_LEVEL = 'SELECT_LEVEL';
export const NEXT_STEP = 'NEXT_STEP';

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