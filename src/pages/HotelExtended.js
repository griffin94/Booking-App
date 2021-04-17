import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import { Container, Tile } from "../components/ui/UIComponents";
import hotelsData from "../data/hotelsData";

const HotelExtended = () => {
  const params = useParams();
  const [hotel, setHotel] = useState(() => {
    const [initialState] = hotelsData.filter((hotel) => hotel.id === params.id);
    return initialState;
  });

  return (
    <Container>
      <Tile>
        <p>Hotel id: {hotel.id}</p>
        <p>{hotel.name}</p>
        <p>{hotel.city}</p>
        <p>{hotel.rating}</p>
        <Carousel images={hotel.images} />
      </Tile>
    </Container>
  );
};

export default HotelExtended;
