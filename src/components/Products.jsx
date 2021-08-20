import React from 'react'

export const Product = ({ item, addCart, cart, products }) => {

    const { name, prize, id } = item

    //function add cart
    const selectItem = id => {
        const prod = products.filter(prod => prod.id === id)[0]
        addCart([
            ...cart, prod
        ])
    }

    //funtion delete item
    const delItem = id => {
        const prods = cart.filter(prod => prod.id !== id)
        addCart(prods)
    }

    return (
        <div>
            <h3>{name}</h3>
            <p>{prize}</p>
            {products
                ? <button
                    type="button"
                    onClick={() => selectItem(id)}
                >Add</button>
                : <button
                    type="button"
                    onClick={() => delItem(id)}
                >Delete</button>
            }

        </div >
    )
}

