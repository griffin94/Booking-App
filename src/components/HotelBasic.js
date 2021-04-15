import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Button, Tile, Title } from "./ui/UIComponents";
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
          <Img src={image} alt='hotel-image' />
        </ImgContainer>
        <Info>
          <Title>{name}</Title>
          <Table>
            <TableRow>
              <HeaderCell>Lokalizacja</HeaderCell>
              <HeaderCell>Typ</HeaderCell>
              <HeaderCell>Standard</HeaderCell>
            </TableRow>
            <TableRow>
              <DataCell>
                {country}, {city}
              </DataCell>
              <DataCell>{type}</DataCell>
              <DataCell>{stars}</DataCell>
            </TableRow>
            <TableRow>
              <HeaderCell>Cena</HeaderCell>
              <HeaderCell>Opinie</HeaderCell>
              <HeaderCell>Ocena</HeaderCell>
            </TableRow>
            <TableRow>
              <DataCell>{price} zł doba/os</DataCell>
              <DataCell>{opinions}</DataCell>
              <DataCell>
                <Rating rating={rating}>{rating}</Rating>
              </DataCell>
            </TableRow>
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
  padding: 20px 0;
  text-align: center;
  @media (min-width: 800px) {
    padding: 0;
  }
`;

const Table = styled.table`
  margin-top: 20px;
  @media (min-width: 800px) {
    margin: auto 0;
  }
`;
const TableRow = styled.tr``;

const HeaderCell = styled.th`
  font-size: ${(props) => props.theme.fonts.md};
  padding: 5px;
  text-align: center;
`;
const DataCell = styled.td`
  font-size: ${(props) => props.theme.fonts.md};
  padding: 5px;
  text-align: center;
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
