import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import store, { addProduct } from './store'

const Nav = (props) => {
    console.log('Nav Rendering', props)

    //Will eventually need to pass down prop with id to product
    return (
        <div id="Nav">
        <ul>
            <ol><Link to="/">Products ({'count'})</Link></ol>
            <ol><Link to="/Product">Top Product ({'rating'})</Link></ol>
            <ol><button onClick= { ()=> props.eventHandler() }>Generate Product</button></ol>
        </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        eventHandler : ()=> dispatch(addProduct())
    }
}

const ConnectedNav = connect(null, mapDispatchToProps)(Nav)
console.log(store.getState())

export default ConnectedNav
