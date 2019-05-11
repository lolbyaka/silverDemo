import {RESET_ATTEMPS, PLAY_TOPIC, SELECT_TOPIC} from './RecordActionsType';

export const playTopic = () => {
    return {
        type: PLAY_TOPIC
    }
}

export const selectTopic = (payload) => {
    return {
        type: SELECT_TOPIC,
        payload
    }
}

export const resetAttemps = () => {
    return {
        type: RESET_ATTEMPS
    }
}