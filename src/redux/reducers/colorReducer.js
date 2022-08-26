

function colorReducer(state = 'rgb(26, 31, 55)', action) {
    return action.type === 'CHANGE_COLOR' ? action.payload : state;
}

export default colorReducer;
