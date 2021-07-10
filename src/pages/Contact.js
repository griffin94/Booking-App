import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  Tile,
  Title,
  Input,
  Textarea,
  Button,
  IconButton,
} from "../components/ui/UIComponents";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";

const Contact = () => {
  const [validationResult, setValidationResult] = useState({
    email: true,
    emailErrorDesc: "",
    message: true,
    messageErrorDesc: "",
  });

  const [counter, setCounter] = useState(0);
  const [hintOpen, setHintOpen] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.elements["email"].value;
    const message = e.target.elements["message"].value;
    const emailValidationResult = validateEmail(email);
    const messageValidationResult = validateMessage(message);
    if (emailValidationResult.email && messageValidationResult.message) {
      console.log("Success");
    } else {
      console.log("Error");
    }
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let result = null;

    if (!email.trim()) {
      result = {
        email: false,
        emailErrorDesc: "Uzupełnij pole",
      };
    } else if (!re.test(email)) {
      result = {
        email: false,
        emailErrorDesc: "Błędny adres e-mail",
      };
    } else {
      result = {
        email: true,
        emailErrorDesc: "",
      };
    }

    setValidationResult((prevState) => ({ ...prevState, ...result }));
    return result;
  };

  const validateMessage = (message) => {
    const result = {
      message: message ? true : false,
      messageErrorDesc: message ? "" : "Uzupełnij pole",
    };

    setValidationResult((prevState) => ({ ...prevState, ...result }));
    return result;
  };

  return (
    <Container>
      <Tile>
        <Content>
          <Header>
            <Title>Napisz do nas!</Title>
            <IconButton
              onClick={() => setHintOpen(true)}
              disabled={hintOpen ? true : false}
            >
              <InfoOutlinedIcon />
            </IconButton>
          </Header>
          <Form onSubmit={(e) => submitHandler(e)}>
            <Input
              type='text'
              placeholder='Email'
              name='email'
              className={validationResult.email ? "" : "error"}
              onBlur={(e) => validateEmail(e.target.value)}
              disabled={hintOpen ? true : false}
            />
            <ValidationOutput>
              {validationResult.emailErrorDesc}
            </ValidationOutput>
            <Textarea
              rows='6'
              placeholder='Wpisz wiadomość (maksymalnie 300 znaków)'
              name='message'
              maxLength='300'
              className={validationResult.message ? "" : "error"}
              onChange={(e) => setCounter(e.target.value.length)}
              onBlur={(e) => validateMessage(e.target.value)}
              disabled={hintOpen ? true : false}
            ></Textarea>
            <TextareaInfoBar>
              <ValidationOutput>
                {validationResult.messageErrorDesc}
              </ValidationOutput>
              <Counter>{counter} / 300</Counter>
            </TextareaInfoBar>
            <Button disabled={hintOpen ? true : false}>Wyślij</Button>
          </Form>
          <Hint className={hintOpen ? "active" : ""}>
            <IconButton
              onClick={() => setHintOpen(false)}
              disabled={hintOpen ? false : true}
            >
              <HighlightOffOutlinedIcon />
            </IconButton>
            <HintContent>
              Booking App jest aplikacją fikcyjną i nie posiada własnej skrzynki
              odbiorczej.
              <br />
              Twoja wiadomość nie zostanie nigdzie wysłana.
            </HintContent>
          </Hint>
        </Content>
      </Tile>
    </Container>
  );
};

export default Contact;

const Content = styled.div`
  max-width: 400px;
  margin: 0 auto;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const Hint = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: auto;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.95);
  color: #fff;
  clip-path: circle(0px at 100% 0%);
  transition: clip-path 0.4s linear;
  &.active {
    clip-path: circle(800px at 100% 0%);
  }
`;

const HintContent = styled.div`
  line-height: 1.7;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const TextareaInfoBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ValidationOutput = styled.div`
  color: red;
  margin-bottom: 10px;
`;

const Counter = styled.div`
  text-align: right;
  margin-bottom: 10px;
`;
