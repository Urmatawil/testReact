import React from 'react'
import './cart.css'
import { Product } from './Products'

export const Cart = ({ cart, addCart }) => (
    <div className="cartBox">
        <h2>Shopping Cart</h2>

        {!(cart.length) ? <p>No hay nada</p> :
            cart.map(item => (
                <Product
                    key={item.id}
                    item={item}
                    cart={cart}
                    addCart={addCart}
                />
            ))}

    </div>
)
