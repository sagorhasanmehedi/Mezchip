import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cart from "../Catr/Cart";
import Furnitures from "../Furnitures/Furnitures";
import Popup from "../Popup/Popup";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  // default hover state function

  return (
    <Container>
      <div className="routeOption">
        <p className="hoverUnderline active">CART</p>
        <p>
          ··········· <span className="hoverUnderline"> DELIVERY</span>
        </p>
        <p>
          ··········· <span className="hoverUnderline"> PAYMENT</span>
        </p>
      </div>
      <Row>
        <Col sm={8}>
          <Furnitures />
        </Col>
        <Col sm={4}>
          {" "}
          <Cart />
        </Col>
      </Row>
      <Services />
    </Container>
  );
};

export default Home;
