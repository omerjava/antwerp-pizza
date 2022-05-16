import React, { useState } from "react";
import "../styles/Cart.css";
import { useCart } from "react-use-cart";

function Cart() {
  const [responseInfo, setResponseInfo] = useState("");

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const buy = () => {
    setResponseInfo("Sorry, our server is currently not active!");
  };

  if (isEmpty){
    return (
      <div className="emptyCart">
        <div className="empty">
          <h5> Empty Cart </h5>
        </div>
      </div>
    );
  }
  return (
    <div className="cart">
      <h3 className="ordersTitle">Your Cart:</h3>
      <h5 className="totalProducts">
        Products: ({totalUniqueItems}) <br></br>
        Total Items: ({totalItems})
      </h5>
      <div className="myOrders">
        {items.map((item, index) => {
          return (
            <div className="cartItem" key={index}>
              <img
                src={item.image}
                alt="pizza"
              />
              <div className="itemInfo">
              <div>
                <strong>{item.name}</strong>
              </div>
              <div>
                <strong>Price:</strong> ${item.price}
              </div>
              <div>
                <strong>Unit:</strong> {item.quantity}
              </div>
              </div>
              <div className="buttons1">
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                className="btn btn-info btn-sm ms-1"
              >
                -
              </button>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                className="btn btn-info btn-sm ms-1"
              >
                +
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="btn btn-danger btn-sm ms-1"
              >
                Remove
              </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="total">
        <p><strong>Total price: ${cartTotal} </strong> </p>
      </div>
      <div className="buttons2">
        <button
          onClick={() => {emptyCart(); setResponseInfo('');}}
          className="btn btn-secondary btn-sm ms-2"
        >
          Cancel
        </button>
        <button onClick={()=>buy()} className="btn btn-primary btn-sm ms-2">
          Buy Now
        </button>
        <p className="responseInfo">{responseInfo}</p>
      </div>
    </div>
  );
}

export default Cart;
