import React from "react";
import { Card } from "react-bootstrap";
import "./Services.css";

const cardData = [
  {
    icon: <i class="fas servicesIcon  fa-tags"></i>,
    title: " MOST AFFORDABLE",
  },
  { icon: <i class="fas servicesIcon fa-tools"></i>, title: " FREE SERVICES" },
  { icon: <i class="fas servicesIcon fa-bolt"></i>, title: " FREE DELIVERY" },
];

const Services = () => {
  return (
    <div className="servicessection">
      <div className="d-flex justify-content-between">
        {cardData.map((DATA) => (
          <Card className="servicesCard" style={{ border: "none" }}>
            <Card.Body>
              <Card.Title>{DATA.icon}</Card.Title>
              <Card.Title className="mb-1 mt-3 servicesIcon servicesHeading">
                {DATA.title}
              </Card.Title>

              <Card.Text className="servicesSubHeading">
                Find the best exclusive range of products
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
