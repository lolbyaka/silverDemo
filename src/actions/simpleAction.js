export const simpleAction = () => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'some result'
    })
}