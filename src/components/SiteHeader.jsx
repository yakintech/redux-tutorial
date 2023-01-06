import React from 'react'
import { connect } from 'react-redux'

function SiteHeader({ counter, increase, empty }) {

    const increaseCounter = () => {
        increase();
    }

    return (<>
        <h1>{counter}</h1>
        <button onClick={() => increaseCounter()}>Increase</button>
        <button onClick={() => empty()}>Empty</button>
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        increase : () => {
            dispatch({type:'INCREASE'})
        },
        empty: () => {
            dispatch({type:'EMPTY'})
        }
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(SiteHeader)