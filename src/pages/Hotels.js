import React from "react";
import { Container } from "../components/ui/UIComponents";
import HotelBasic from "../components/HotelBasic";

const Hotels = ({ hotels }) => {
  return (
    <Container>
      {hotels.map((hotel) => (
        <HotelBasic key={hotel.id} {...hotel} />
      ))}
    </Container>
  );
};

export default Hotels;
