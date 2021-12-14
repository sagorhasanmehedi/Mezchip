import React from "react";
import { Button } from "react-bootstrap";
import Popup from "../Popup/Popup";
import "./Cart.css";

const Cart = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <React.Fragment>
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
        <button onClick={() => setModalShow(true)} className="placeOrder">
          PLACE ORDER
        </button>
      </div>
      <Popup show={modalShow} onHide={() => setModalShow(false)} />
    </React.Fragment>
  );
};

export default Cart;
