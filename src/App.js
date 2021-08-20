import React, { Fragment, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from "./components/Header";
import { Product } from "./components/Products"

function App() {

  const [products, addProduct] = useState([
    { id: 1, name: "React", prize: 20 },
    { id: 2, name: "VueJS", prize: 50 },
    { id: 3, name: "Svelte", prize: 30 },
  ])

  const year = new Date().getFullYear()
  return (
    <Fragment>
      <Header
        title="Header from Props"
      />

      {products.map(product => (
        <Product
          key={product.id}
          product={product}
        />
      ))}

      <Footer year={year} />
    </Fragment>
  );
}

export default App;
