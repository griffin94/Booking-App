import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Button, Tile } from "./ui/UIComponents";
import { Link } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";

const HotelBasic = ({
  id,
  name,
  city,
  country,
  rating,
  description,
  fullDescription,
  image,
  opinions,
  price,
  type,
  standard,
}) => {
  const [visible, setVisible] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const buttonLabel = visible ? "Ukryj" : "Czytaj więcej";
  const fullDescriptionContent = useRef();

  const stars = [];
  for (let i = 0; i < standard; i++) {
    stars.push(<StarIcon key={i} style={{ fill: "gold" }} />);
  }

  useEffect(() => {
    setMaxHeight(visible ? fullDescriptionContent.current.scrollHeight : 0);
  }, [visible]);

  return (
    <Tile>
      <RowContainer>
        <ImgContainer>
          <Img src={image} />
        </ImgContainer>
        <Info>
          <HotelName>{name}</HotelName>
          <Table>
            <TableData>
              <TableLabel>Kraj</TableLabel>
              <br />
              {country}
            </TableData>
            <TableData>
              <TableLabel>Miasto</TableLabel>
              <br />
              {city}
            </TableData>
            <TableData>
              <TableLabel>Rodzaj</TableLabel>
              <br />
              {type}
            </TableData>
            <TableData>
              <TableLabel>Standard</TableLabel>
              <br />
              {stars}
            </TableData>
          </Table>
          <Table>
            <TableData>
              <TableLabel>Cena</TableLabel>
              <br />
              {price} zł doba/os
            </TableData>
            <TableData>
              <TableLabel>Opinie</TableLabel>
              <br />
              {opinions}
            </TableData>
            <TableData>
              <TableLabel>Ocena</TableLabel>
              <br />
              <Rating rating={rating}>{rating}</Rating>
            </TableData>
          </Table>
        </Info>
      </RowContainer>
      <Description>{description}</Description>
      <FullDescription ref={fullDescriptionContent} maxHeight={maxHeight}>
        {fullDescription}
      </FullDescription>
      <Navigation>
        <StyledButton onClick={() => setVisible(!visible)}>
          {buttonLabel}
        </StyledButton>
        <StyledButton>
          <StyledLink to={`/Booking-App/hotel/${id}`}>Galeria</StyledLink>
        </StyledButton>
      </Navigation>
    </Tile>
  );
};

export default React.memo(HotelBasic);

const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const ImgContainer = styled.div`
  flex: 1 1 50%;
`;

const Img = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 6px;
  margin: 0 auto;
  @media (min-width: 800px) {
    margin: 0;
  }
`;

const Info = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  @media (min-width: 800px) {
    margin: 0px;
    padding-left: 20px;
  }
`;

const Table = styled.div`
  margin: 10px 0;
  display: flex;
  text-align: center;
`;
const TableData = styled.div`
  margin: 0 auto;
  padding: 10px 0;
  font-size: ${(props) => props.theme.fonts.md};
`;
const TableLabel = styled.span`
  font-size: ${(props) => props.theme.fonts.md};
  font-weight: lighter;
`;

const HotelName = styled.h2`
  font-size: ${(props) => props.theme.fonts.xl};
  text-align: center;
  letter-spacing: 1px;
`;

const Rating = styled.span`
  font-size: ${(props) => props.theme.fonts.md};
  font-weight: bold;
  color: #fff;
  padding: 2px 10px;
  border-radius: 4px;
  margin: 4px 0;
  background: ${(props) => {
    switch (true) {
      case props.rating >= 7:
        return "#13c242";
      case props.rating >= 4 && props.rating < 7:
        return "#bd9f08";
      case props.rating < 4:
        return "#940303";
    }
  }};
`;

const Description = styled.div`
  flex: 1 1 100%;
  margin: 10px 0;
  text-align: justify;
  font-size: ${(props) => props.theme.fonts.md};
`;

const FullDescription = styled.div`
  flex: 1 1 100%;
  margin: 10px 0;
  text-align: justify;
  font-size: ${(props) => props.theme.fonts.md};
  max-height: ${(props) => `${props.maxHeight}px`};
  transition: max-height 0.2s linear;
  overflow: hidden;
`;

const Navigation = styled.div`
  display: flex;
  @media (min-width: 800px) {
    justify-content: flex-start;
  }
`;

const StyledButton = styled(Button)`
  :first-child {
    margin-right: 5px;
  }
  :last-child {
    margin-left: 5px;
  }

  @media (min-width: 800px) {
    flex: 0 0 calc(25% - 5px);
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
