export const PLAY_TOPIC = 'PLAY_TOPIC';
export const RESET_ATTEMPS = 'RESET_ATTEMPS';

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