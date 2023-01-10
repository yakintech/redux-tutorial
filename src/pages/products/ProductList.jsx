import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function ProductList() {

    const [products, setproducts] = useState([]);

    //map dispatch to props!!
    const dispatch = useDispatch();


    let favorites = useSelector(fav => fav.favoriteReducer);


    useEffect(() => {

        fetch('https://northwind.vercel.app/api/products')
            .then(res => res.json())
            .then(data => {
                setproducts(data);
            })
    }, [])

    const addToFavorites = (item) => {

        let favoriteControl = favorites.find(q => q.id == item.id);

        if (!favoriteControl) {
            dispatch({ type: 'ADD', payload: item })
        }
        else {
            dispatch({ type: 'REMOVE', payload: item });
        }

    }

    const getBtn = (item) => {

        let favoriteControl = favorites.find(q => q.id == item.id);

        if (!favoriteControl)
            return <button onClick={() => addToFavorites(item)}>Add to favorites</button>
        else
            return <button onClick={() => addToFavorites(item)}>Remove to favorites</button>

    }

    return (<>
        <ul>
            {
                products && products.map(item => {
                    return <Fragment key={item.id}>
                        <li>{item.name}</li>
                        {
                            getBtn(item)
                        }
                    </Fragment>
                })
            }
        </ul>
    </>
    )
}

export default ProductList