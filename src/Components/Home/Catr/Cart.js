import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cartBox">
      <button className="cartButton">
        <i class="fas cartIcon fa-gift"></i>
        Have a promo code?
      </button>
      <div className="cardText">
        <div className="paymentName">
          <p>Monthly Rent</p>
          <p>Security Deposit</p>
          <p>GST</p>
          <p>Coupon Dicsount</p>
          <p>Delivery</p>
        </div>
        <div className="paymentCost">
          <p>Rs 3050</p>
          <p>Rs 6799</p>
          <p>Rs 300</p>
          <p className="cuponDicsount">- Rs 2,789</p>
          <p className="deliveryCharge">FREE</p>
        </div>
      </div>
      <span className="cartDivider">
        ---------------------------------------------------
      </span>
      <div className="cardTotal">
        <p>Total payable</p>
        <p>Rs 30,000</p>
      </div>
      <button className="placeOrder">PLACE ORDER</button>
    </div>
  );
};

export default Cart;
