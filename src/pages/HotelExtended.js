import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Accordion from "../components/Accordion";
import Carousel from "../components/Carousel";
import { Container, Tile, Title } from "../components/ui/UIComponents";
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
        <Title>
          {hotel.name} - {hotel.city}, {hotel.country}
        </Title>
        <Carousel images={hotel.images} />
        <Accordion accordionData={hotel.accordion} />
      </Tile>
    </Container>
  );
};

export default HotelExtended;
