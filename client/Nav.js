import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import store, { addProduct } from './store'

const Nav = (props) => {
    console.log('Nav Rendering', props)
    const topProduct = props.products.sort((a, b)=> a.rating < b.rating)
    
    const rating = topProduct[0] ? topProduct[0].rating : 'rating'


    //Will eventually need to pass down prop with id to product
    return (
        <div id="Nav">
        <ul>
            <ol><Link to="/">Products ({props.products.length})</Link></ol>
            <ol><Link to="/Product">Top Product ({rating})</Link></ol>
            <ol><button onClick= { ()=> props.eventHandler() }>Generate Product</button></ol>
        </ul>
        </div>
    )
}



const mapStateToProps = (state) => {
    return { products : state.products }
}

const mapDispatchToProps = (dispatch) => {
    return {
        eventHandler : ()=> dispatch(addProduct())
    }
}

const ConnectedNav = connect(mapStateToProps, mapDispatchToProps)(Nav)
console.log(store.getState())

export default ConnectedNav
