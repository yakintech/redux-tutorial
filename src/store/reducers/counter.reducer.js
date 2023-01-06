export const counterReducer = (state, action) => {

    if (typeof state === 'undefined') {
        return 0;
    }
    if (action.type == 'INCREASE') {
        return state + 1;
    }
    else if (action.type == 'DECREASE') {
        return state - 1;
    }
    else if (action.type == 'EMPTY') {
        return 0;
    }
    else {
        return state;
    }
}