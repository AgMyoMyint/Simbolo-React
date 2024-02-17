import { useState } from 'react'
import './App.css'
import Products from './pages/product/Products.jsx'
import Product from './pages/product/Product.jsx'
import Cart from './pages/cart/Cart.jsx'
import CartItem from './pages/cart/CartItem.jsx'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Cart />
      <CartItem />
      <Products />
      <Product />
    </>
  )
}

export default App
