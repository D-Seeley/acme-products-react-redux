import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import faker from 'faker'

//Constants
const LOAD_PRODUCTS = "LOAD_PRODUCTS"
const ADD_PRODUCT = "ADD_PRODUCT"
const DELETE_PRODUCT = "DELETE_PRODUCT"

//Action Creators 
const _loadProducts = (products) => ({type: LOAD_PRODUCTS, products})
const _addProduct = (product) => ({type: ADD_PRODUCT, product})
const _deleteProduct = (id) => ({type: DELETE_PRODUCT, id})

//Actions (Thunk)
export const loadProducts = () => {
    return (dispatch) => axios.get('/api')
        .then(res => res.data)
        .then(products => dispatch(_loadProducts(products)))
        .catch(err => console.log(err))
}

export const deleteProduct = (id) => {
    return (dispatch) => axios.delete(`/api/products/${id}`)
        .then(()=> dispatch(_deleteProduct(id)))
}

export const addProduct = () => {
    const product = {
        name: faker.commerce.productName(),
        rating: Math.floor(Math.random() * 10)
    }

    return (dispatch)=> axios.post('/api', product )
        .then(response => response.data)
        .then(_product=> dispatch(_addProduct(_product)))
        .catch(err => console.log(err))
}

//Reducer
const initialState = {products: []}

const reducer = (state = initialState, action)=> {
    switch (action.type) {
        case LOAD_PRODUCTS :
        console.log(LOAD_PRODUCTS, action.products)
            state = {products : action.products}
        break;
        case ADD_PRODUCT : 
            console.log(ADD_PRODUCT, state, action.product)
            state = {
                products : [...state.products, action.product]
            }
        break;
        case DELETE_PRODUCT :
            console.log(state.products.filter(product => product.id !== action.id))
            state = {
                products : state.products.filter(product => product.id !== action.id)}
        break;
    }

    console.log("state after", state)
    return state
}

const store = createStore(reducer, applyMiddleware(thunk))
export default store

