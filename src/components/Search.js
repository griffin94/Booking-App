import React from "react";
import styled from "styled-components";
import { Container, Tile, Button } from "./ui/UIComponents";
import hotelsData from "./../data/hotelsData";
import { SmallTitle } from "./ui/UIComponents";

const Search = ({ match, history }) => {
  const term = match.params.term.toLowerCase();
  const hotelsFound = hotelsData.filter((hotel) => {
    return (
      hotel.name.toLowerCase().includes(term) ||
      hotel.country.toLowerCase().includes(term) ||
      hotel.city.toLowerCase().includes(term)
    );
  });
  return (
    <Container>
      <StyledTile>
        {hotelsFound.length ? (
          hotelsFound.map((hotel) => (
            <Card key={hotel.id}>
              <Img src={hotel.images[0].url} />
              <CardTitle>{hotel.name}</CardTitle>
              <Paragraph>
                {hotel.country}, {hotel.city}
              </Paragraph>
              <Button onClick={() => history.push(`/hotel/${hotel.id}`)}>
                Przejdz do oferty
              </Button>
            </Card>
          ))
        ) : (
          <StyledSmallTitle>Brak wyników wyszukiwania</StyledSmallTitle>
        )}
      </StyledTile>
    </Container>
  );
};

export default Search;

const StyledTile = styled(Tile)`
  @media (min-width: 800px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Card = styled.div`
  padding: 20px;
  margin: 10px;
  background: ${(props) => props.theme.cards.bg};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 800px) {
    width: calc(33.33% - 20px);
  }
`;
const CardTitle = styled.h4`
  font-size: ${(props) => props.theme.fonts.md};
  margin: 10px 0;
`;

const Img = styled.img`
  max-width: 100%;
  border-radius: 6px;
`;

const Paragraph = styled.p`
  margin: 10px 0;
`;

const StyledSmallTitle = styled(SmallTitle)`
  margin-left: auto;
  margin-right: auto;
`;
