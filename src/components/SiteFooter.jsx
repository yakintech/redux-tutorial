import React from 'react'
import { connect } from 'react-redux'

function SiteFooter({ counter }) {

    return (<>
        <h1>Counter: {counter}</h1>
    </>
    )
}


const mapStateToProps = (state) => {
    return {
        counter: state
    }
}
export default connect(mapStateToProps)(SiteFooter)