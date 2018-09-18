import React from 'react'
import { connect } from 'react-redux'
import Product from './Product'
import store, { deleteProduct } from './store'

let count = 0

const ProductList = (props) => {
    console.log(`Pass #${count++} : Props = `, props)
    const { products, eventHandler } = props

    return (
        <ul>
            {products.map(product => <Product key={product.id} id={product.id} name={product.name} rating={product.rating} eventHandler={eventHandler} />)}
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