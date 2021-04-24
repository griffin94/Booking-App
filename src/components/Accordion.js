import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { IconButton } from "./ui/UIComponents";

const AccordionTile = ({ header, content, index }) => {
  const [expanded, setExpanded] = useState(() => (index === 0 ? true : false));
  const [maxHeight, setMaxHeight] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    setMaxHeight(expanded ? contentRef.current.scrollHeight : 0);
  }, [expanded]);
  return (
    <Tile>
      <Header expanded={expanded}>
        {header}
        <StyledButton
          onClick={() => setExpanded(!expanded)}
          expanded={expanded}
        >
          <ExpandLessIcon />
        </StyledButton>
      </Header>
      <Content ref={contentRef} maxHeight={maxHeight}>
        {content}
      </Content>
    </Tile>
  );
};

const Tile = styled.div`
  overflow: hidden;
  margin-top: 5px;
  :first-child {
    margin-top: 0;
  }
`;
const Header = styled.div`
  background: ${(props) => props.theme.accordion.bg};
  padding: 10px;
  margin-bottom: 5px;
  transition: border-radius 0.2s ease;
  border-radius: ${(props) => (props.expanded ? "6px 6px 0 0" : "6px")};
  font-size: ${(props) => props.theme.fonts.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Content = styled.div`
  padding: 0 5px;
  max-height: ${(props) => props.maxHeight}px;
  font-size: ${(props) => props.theme.fonts.md};
  transition: max-height 0.2s ease;
`;

const StyledButton = styled(IconButton)`
  transform: ${(props) => (props.expanded ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.2s ease;
`;

const Accordion = ({ accordionData }) => {
  return (
    <Wrapper>
      {accordionData.map((item, index) => (
        <AccordionTile key={item.id} {...item} index={index} />
      ))}
    </Wrapper>
  );
};

export default Accordion;

const Wrapper = styled.div`
  padding: 20px 0;
`;
