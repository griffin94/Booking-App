import React from "react";
import styled from "styled-components";
import { Container, Tile } from "../components/ui/UIComponents";
import HotelIcon from "@material-ui/icons/Hotel";
import PublicIcon from "@material-ui/icons/Public";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const publicIconStyles = {
  fontSize: "80px",
  fill: "#399DD5",
};
const locationIconStyles = {
  fontSize: "80px",
  fill: "#3AB4B4",
};
const hotelIconStyles = {
  fontSize: "80px",
  fill: "#3DCD94",
};

const About = () => {
  return (
    <Container>
      <Tile>
        <Title>Nasze założenia</Title>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Paragraph>
      </Tile>
      <Tile>
        <SmallTilesContainer>
          <SmallTile>
            <PublicIcon style={publicIconStyles} />
            <SmallTileTitle>6 krajów</SmallTileTitle>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus animi ducimus suscipit illo aut, cum, veritatis
              corporis nesciunt ipsa iste quibusdam ratione ea?
            </Paragraph>
          </SmallTile>
          <SmallTile>
            <LocationOnIcon style={locationIconStyles} />
            <SmallTileTitle>2000 lokalizacji</SmallTileTitle>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus animi ducimus suscipit illo aut, cum, veritatis
              corporis nesciunt ipsa iste quibusdam ratione ea?
            </Paragraph>
          </SmallTile>
          <SmallTile>
            <HotelIcon style={hotelIconStyles} />
            <SmallTileTitle>10000 ofert</SmallTileTitle>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus animi ducimus suscipit illo aut, cum, veritatis
              corporis nesciunt ipsa iste quibusdam ratione ea?
            </Paragraph>
          </SmallTile>
        </SmallTilesContainer>
      </Tile>
    </Container>
  );
};

export default About;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fonts.xl};
`;

const SmallTilesContainer = styled.div`
  @media (min-width: 800px) {
    display: flex;
    justify-content: space-around;
  }
`;

const SmallTile = styled.div`
  text-align: center;
  @media (min-width: 800px) {
    flex: 0 0 25%;
  }
`;

const SmallTileTitle = styled.h3`
  font-size: ${(props) => props.theme.fonts.lg};
  margin: 10px 0;
`;

const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fonts.md};
`;
