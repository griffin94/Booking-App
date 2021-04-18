import styled from "styled-components";

const Container = styled.div`
  padding: 20px 10px 10px;
`;

export { Container };

const Tile = styled.div`
  max-width: 1200px;
  margin: 0 auto 12px;
  padding: 20px;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  color: ${(props) => props.theme.fontColor};
  background: ${(props) => props.theme.tile.bg};
  box-shadow: ${(props) => props.theme.tile.shadow};
  :last-child {
    margin-bottom: 0;
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      to right,
      hsl(210, 78%, 56%),
      hsl(146, 68%, 55%)
    );
  }
`;

export { Tile };

const Title = styled.h2`
  font-size: ${(props) => props.theme.fonts.xl};
`;

export { Title };

const Input = styled.input`
  min-width: 0px;
  height: 40px;
  border: ${(props) => props.theme.input.border};
  background: ${(props) => props.theme.input.background};
  border-radius: 4px;
  padding: 0 10px;
  color: ${(props) => props.theme.input.color};
  :focus {
    outline: none;
    border: 2px solid #009dff;
    padding: 0 9px;
  }

  ::placeholder {
    color: ${(props) => props.theme.input.placeholderColor};
  }
  &.error {
    border: 2px solid red;
    padding: 0 9px;
  }
`;

export { Input };

const Textarea = styled.textarea`
  resize: none;
  min-width: 0px;
  border-radius: 4px;
  padding: 10px;
  border: ${(props) => props.theme.input.border};
  background: ${(props) => props.theme.input.background};
  color: ${(props) => props.theme.input.color};
  :focus {
    outline: none;
    border: 2px solid #009dff;
    padding: 9px;
  }

  ::placeholder {
    color: ${(props) => props.theme.input.placeholderColor};
  }

  &.error {
    border: 2px solid red;
    padding: 9px;
  }
`;

export { Textarea };

const Button = styled.button`
  height: 40px;
  width: 100%;
  border: 2px solid transparent;
  border-radius: 6px;
  background: #009dff;
  color: #fff;
  font-size: ${(props) => props.theme.fonts.sm};
  cursor: pointer;
  :hover {
    background: #0383d3;
  }
  :focus {
    outline: none;
    border: 2px solid #026caf;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-size: ${(props) => props.theme.fonts.sm};
  }
`;

export { Button };

const IconButton = styled.button`
  background: transparent;
  border: 1px solid transparent;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #009dff;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.$rotate ? `rotate(360deg)` : "rotate(0deg)")};
  :focus,
  :hover {
    outline: none;
    border: 1px solid #009dff;
    border-radius: 6px;
  }
`;

export { IconButton };

const Button3D = styled.button`
  color: #fff;
  height: 48px;
  font-size: ${(props) => props.theme.fonts.md};
  background: rgb(48, 145, 145);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.05s linear;
  ::before {
    content: "Wyślij";
    position: absolute;
    left: -4px;
    top: -4px;
    height: 48px;
    width: 100%;
    border-radius: 6px;
    background: rgb(58, 180, 180);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.05s linear;
  }
  :active {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
    ::before {
      transform: translate(4px, 4px);
    }
  }
  :focus {
    outline: none;
  }
`;

export { Button3D };
