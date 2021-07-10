import React from "react";
import { Container } from "../components/ui/UIComponents";
import HotelBasic from "../components/HotelBasic";
import hotelsData from "./../data/hotelsData";

const Hotels = () => {
  return (
    <Container>
      {hotelsData.map((hotel) => (
        <HotelBasic key={hotel.id} {...hotel} />
      ))}
    </Container>
  );
};

export default Hotels;
