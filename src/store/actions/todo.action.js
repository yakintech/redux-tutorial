export const todoAction = {
    add: (payload) => {
        return {
            type: 'ADD_TODO',
            payload: payload
        }
    },
    remove: (payload) => {
        return {
            type: 'REMOVE_TODO',
            payload: payload
        }
    },
    update: (payload) => {
        return {
            type: 'UPDATE_TODO',
            payload: payload
        }
    },
    getAll: () => {

        return async (dispatch) => {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(res => res.json())
                .then(data => {
                   dispatch({type:'GET_ALL_TODOS', payload: data})
                })
        }
    }
}
