import React, {useContext} from "react";
import {Context} from "../Context";
import CartItems from "../component/Cart-items";
import CheckoutItems from "../component/Checkout-items.js";
import useClicked from "../hooks/useClicked";

export default function Cart() {
  const {cartItems, total} = useContext(Context);
  const [clicked, ref] = useClicked();
  const cart = cartItems.map(item => <CartItems item={item} key={item.id} />);

  return (
    <main className="cart-page">
      <section>
        <span className="cart-title">Shopping Cart</span>
        <div className="cart-container">
          {cart}
        </div>
      </section>

      <section className="checkout-container">
        <span>Subtotal</span>
        <span className="checkout-subtotal">{total.toLocaleString("en-US", {style: "currency", currency: "USD"})}</span>
      </section>

      {clicked ?
        <button
          className="loading-checkout-btn"
        >Loading...</button>:
        <button
          className="checkout-btn"
          ref={ref}
        >Checkout</button>
      }
    </main>
  )
}