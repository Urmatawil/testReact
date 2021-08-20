import React, { Fragment, useState } from 'react';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { Header } from "./components/Header";
import { Product } from "./components/Products"

function App() {

  //products array
  const [products, addProduct] = useState([
    { id: 1, name: "React", prize: 20 },
    { id: 2, name: "VueJS", prize: 50 },
    { id: 3, name: "Svelte", prize: 30 },
  ])

  //Cart array 
  const [cart, addCart] = useState([])

  const year = new Date().getFullYear()

  return (
    <Fragment>
      <Header
        title="Header from Props"
      />

      {products.map(item => (
        <Product
          key={item.id}
          item={item}
          products={products}
          cart={cart}
          addCart={addCart}
        />
      ))}

      <Cart
        cart={cart}
        addCart={addCart}
      />

      <Footer year={year} />
    </Fragment>
  );
}

export default App;
