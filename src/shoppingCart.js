import React, {useState} from 'react'

const initialCart = [
  {id:1, title: "Product", description: "Desc"},
  {id:2, title: "Product #2", description: "Desc #2"}
];

const ShoppingCart = () => {

  const [cart, setCart] = useState (initialCart);

  return (
    <div>ShoppingCart</div>
  )
}

export default ShoppingCart