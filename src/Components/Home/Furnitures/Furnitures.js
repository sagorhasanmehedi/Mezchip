import React from "react";
import "./Furniture.css";
import furnitures1 from "../../../images/royalbad.jpg";
import furnitures2 from "../../../images/royalbed2.jpg";

const Furnitures = () => {
  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="furnitureCart">
      <div className="fullCart">
        <div className="furnitureInfo">
          <img className="furnitureImage" src={furnitures1} alt="" srcset="" />
          <div>
            <p className="furnitureName">Royal Double Bed</p>
            <p className="furniturePrice">$45.00</p>
            <form onSubmit={handleSubmit} className="furnitureform">
              <button type="submit" className="furnitureButton">
                -
              </button>
              <input className="furnitureInput" type="text" placeholder="1" />
              <button type="submit" className="furnitureButton">
                +
              </button>
            </form>
          </div>
        </div>
        <div className="furnitureDiscription">
          <div>
            <p className="discriptionName">Tenure</p>
            <p>12 Month</p>
          </div>
          <div>
            <p className="discriptionName">Deposit</p>
            <p className="mb-0">Rs 799</p>
            <p className="discriptionRefund">Fully refundable</p>
          </div>
          <div>
            <p className="discriptionName">Total</p>
            <p className="totalPrice">Rs 1499</p>
          </div>
        </div>
      </div>
      <div className="fullCart">
        <div className="furnitureInfo">
          <img className="furnitureImage" src={furnitures2} alt="" srcset="" />
          <div>
            <p className="furnitureName">Royal Air Bed</p>
            <p className="furniturePrice">$85.00</p>
            <form onSubmit={handleSubmit} className="furnitureform">
              <button type="submit" className="furnitureButton">
                -
              </button>
              <input className="furnitureInput" type="text" placeholder="1" />
              <button type="submit" className="furnitureButton">
                +
              </button>
            </form>
          </div>
        </div>
        <div className="furnitureDiscription">
          <div>
            <p className="discriptionName">Tenure</p>
            <p>12 Month</p>
          </div>
          <div>
            <p className="discriptionName">Deposit</p>
            <p className="mb-0">Rs 999</p>
            <p className="discriptionRefund">Fully refundable</p>
          </div>
          <div>
            <p className="discriptionName">Total</p>
            <p className="totalPrice">Rs 1699</p>
          </div>
        </div>
      </div>

      <div className="needHelpPart">
        <button className="continueButton">CONTINUE SHOPPING</button>
        <button className="needHelpButton">Need help ?</button>
      </div>
    </div>
  );
};

export default Furnitures;
