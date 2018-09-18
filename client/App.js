import React, { Component } from 'react'
import { HashRouter, Switch, Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import ProductList from './ProductList'
import Product from './Product'
import store, { loadProducts, deleteProduct, addProduct } from './store'
import axios from 'axios';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products : []
        }

        // this.deleteProduct = this.deleteProduct.bind(this)
    }

    componentDidMount() {
        store.dispatch(loadProducts())
    }

    // deleteProduct(id) {
    //     store.dispatch(deleteProduct(id))
    // }

    // createProduct() {
    //     store.dispatch(addProduct())
    // }

    render() {
        console.log('App Rendering')
        return (
            <div>
                <Nav eventHandler={addProduct}/>
                <Switch>
                    <Route path="/product" render={()=> <Product />}/>  
                    <Route path="/" render={()=> <ProductList eventHandler={deleteProduct}/>}/>
                </Switch>
            </div>
        )
    }
}