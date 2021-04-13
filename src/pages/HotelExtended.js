import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Tile } from "../components/ui/UIComponents";
import hotelsData from "../data/hotelsData";

const HotelExtended = () => {
  const params = useParams();
  const [hotel, setHotel] = useState({});

  useEffect(() => {
    setHotel(...hotelsData.filter((hotel) => hotel.id === params.id));
  }, []);

  return (
    <Container>
      <Tile>
        <p>Hotel id: {hotel.id}</p>
        <p>{hotel.name}</p>
        <p>{hotel.city}</p>
        <p>{hotel.rating}</p>
      </Tile>
    </Container>
  );
};

export default HotelExtended;
