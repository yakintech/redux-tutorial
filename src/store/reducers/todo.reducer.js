export const todoReducer = (state, action) => {

    if (state == undefined) {
        return [];
    }


    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        // case 'UPDATE_TODO':
        //     return [...state, action.payload]
        // case 'REMOVE_TODO':
        //     return [...state, action.payload]
        case 'GET_ALL_TODOS':
            return [ ...action.payload]
        default:
            return state;
    }

}