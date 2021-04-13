import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  Tile,
  Input,
  Textarea,
  Button3D,
} from "../components/ui/UIComponents";

const Contact = () => {
  const [emailValid, setEmailValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    const emailInput = e.target.elements["email"];
    const messageInput = e.target.elements["message"];
    console.log(validateEmail(emailInput));
    console.log(validateMessage(messageInput));
  };

  const validateEmail = (emailInput) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = re.test(emailInput.value);
    result ? setEmailValid(true) : setEmailValid(false);
    return result;
  };

  const validateMessage = (messageInput) => {
    const result = messageInput.value ? true : false;
    result ? setMessageValid(true) : setMessageValid(false);
    return result;
  };

  const showError = (input) => {
    setEmailValid(false);
    // input.classList.add("error");
  };

  const removeError = (input) => {
    setEmailValid(true);
    console.log("OK");
    // input.classList.remove("error");
  };

  return (
    <Container>
      <Tile>
        <Form onSubmit={(e) => submitHandler(e)}>
          <Title>Napisz do nas!</Title>
          <StyledInput
            type='text'
            placeholder='Email'
            name='email'
            className={emailValid ? "" : "error"}
          />
          <ValidationOutput>
            {emailValid ? "" : "Wpisz poprawny adres e-mail"}
          </ValidationOutput>
          <Textarea
            rows='6'
            placeholder='Wpisz wiadomość'
            name='message'
            className={messageValid ? "" : "error"}
          ></Textarea>
          <ValidationOutput>
            {messageValid ? "" : "Wpisz wiadomość"}
          </ValidationOutput>
          <Button3D>Wyślij</Button3D>
        </Form>
      </Tile>
    </Container>
  );
};

export default Contact;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fonts.xl};
  margin: 10px 0;
`;

const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled(Input)``;

const ValidationOutput = styled.div`
  color: red;
  margin-bottom: 10px;
`;
