import React from 'react'

export const Product = ({ product }) => {

    const { name, prize, id } = product

    //function add cart
    const addCart = id => console.log(`Add ${id} ${name}`);

    return (
        <div>
            <h3>{name}</h3>
            <p>{prize}</p>
            <button
                type="button"
                onClick={() => addCart(id)}
            >Add</button>
        </div >
    )
}

