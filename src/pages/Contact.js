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
  const [validationResult, setValidationResult] = useState({
    email: true,
    emailErrorDesc: "",
    message: true,
    messageErrorDesc: "",
  });

  const [counter, setCounter] = useState(0);

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
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
        <Form onSubmit={(e) => submitHandler(e)}>
          <Title>Napisz do nas!</Title>
          <StyledInput
            type='text'
            placeholder='Email'
            name='email'
            className={validationResult.email ? "" : "error"}
          />
          <ValidationOutput>{validationResult.emailErrorDesc}</ValidationOutput>
          <Textarea
            rows='6'
            placeholder='Wpisz wiadomość (maksymalnie 300 znaków)'
            name='message'
            maxLength='300'
            className={validationResult.message ? "" : "error"}
            onChange={(e) => setCounter(e.target.value.length)}
          ></Textarea>
          <TextareaInfoBar>
            <ValidationOutput>
              {validationResult.messageErrorDesc}
            </ValidationOutput>
            <Counter>{counter} / 300</Counter>
          </TextareaInfoBar>
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
