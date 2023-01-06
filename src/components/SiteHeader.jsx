import React from 'react'
import { connect } from 'react-redux'
import { counterAction } from '../store/actions/counter.action';

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
            dispatch(counterAction.increase())
        },
        empty: () => {
            dispatch(counterAction.empty())
        }
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(SiteHeader)