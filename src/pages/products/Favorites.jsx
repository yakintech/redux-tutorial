import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Favorites() {

    //global state e erişiyorum!
    //map state to props
    let favorites = useSelector(state => state.favoriteReducer);
    const dispatch = useDispatch();


    const removeItem = (item) => {
        dispatch({ type: 'REMOVE', payload: item });
    }

    return (<>
        <ul>
            {
                favorites && favorites.map(item => {
                    return <>
                        <li>{item.name}</li>
                        <button onClick={() => removeItem(item)}>Remove</button>
                    </>
                })
            }
        </ul>

    </>)
}

export default Favorites