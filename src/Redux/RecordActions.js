import {RESET_ATTEMPS, PLAY_TOPIC} from './RecordActionsType';

export const playTopic = () => {
    return {
        type: PLAY_TOPIC
    }
}
export const resetAttemps = () => {
    return {
        type: RESET_ATTEMPS
    }
}