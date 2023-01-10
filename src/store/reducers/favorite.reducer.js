
export const favoriteReducer = (state, action) => {

    if(state == undefined){
        return [];
    }

    switch (action.type) {
        case 'ADD':
            return [...state, action.payload];
        case 'REMOVE':
            let filteredFavorites = state.filter(q => q.id != action.payload.id);
            return [...filteredFavorites];
        case 'EMPTY':
            return [];
        default:
            return state;
    }

}

// let action = {
//     type:'ADD',
//     payload: {
//         name:'IPhone',
//         unitPrice:33
//     }
// }