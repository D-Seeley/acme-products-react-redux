import React from 'react'
import { connect } from 'react-redux'
import Product from './Product'
import store, { deleteProduct } from './store'

let count = 0

const ProductList = ({ products, eventHandler }) => {
    //Logic for ordering/sort

    return (
        <ul>
            {products.sort((a, b) => b.rating - a.rating).map(product => <Product key={product.id} id={product.id} name={product.name} rating={product.rating} eventHandler={eventHandler} />)}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        products : state.products
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        eventHandler : (id)=> dispatch(deleteProduct(id))
    }
}

const ConnectedProductList = connect(mapStateToProps, mapDispatchToProps)(ProductList)
console.log(store.getState())


export default ConnectedProductList