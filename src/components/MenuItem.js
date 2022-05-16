import React from "react";
import "../styles/MenuItem.css";
import { useCart } from "react-use-cart";


function MenuItem({item, name, price, image }) {

  const { addItem } = useCart();

  return (
    <div className="menuItem">
      <div
        className="firstDiv"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="secondDiv">
        <h2>{name}</h2>
        <p>{price} €</p>
        <button onClick={() => addItem(item)}>Order</button>
      </div>
    </div>
  );
}

export default MenuItem;
