import React from 'react'

const Product = ({id, name, rating, eventHandler }) => {
    console.log(eventHandler)
    return (
            <li> {name} - ({rating}) <button onClick={()=>eventHandler(id)}>x</button> </li>
    )
} 

export default Product