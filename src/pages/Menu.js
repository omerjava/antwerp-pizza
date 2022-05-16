import React from "react";
import "../styles/Menu.css";
import { MenuList } from "../data/MenuList";
import MenuItem from "../components/MenuItem";
import Cart from "../components/Cart";
import { CartProvider } from "react-use-cart";

function Menu() {
  return (
    <div className="menu">
      <CartProvider>
        <div className="menuSide">
          <div className="menuList">
            {MenuList.products.map((element, index) => {
              return (
                <MenuItem
                  key={index}
                  image={element.image}
                  name={element.name}
                  price={element.price}
                  item={element}
                />
              );
            })}
          </div>
        </div>
        <div className="orderSide">
          <Cart />
        </div>
      </CartProvider>
    </div>
  );
}

export default Menu;
