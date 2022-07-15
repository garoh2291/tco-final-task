import React, { useState } from "react";
import "./styles.css";
import {
  isRequired,
  maxLength30,
  maxLength400,
  minLength3,
  validateEmail,
  validatePhone,
  minLength9,
} from "../../../helpers";
import {
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../../Redux/messageSlice";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [messageData, setMessageData] = useState({
    name: {
      value: "",
      error: undefined,
      validations: [isRequired, minLength3, maxLength30],
    },
    email: {
      value: "",
      error: undefined,
      validations: [isRequired, minLength3, validateEmail],
    },
    phone: {
      value: "",
      error: undefined,
      validations: [isRequired, minLength9, validatePhone],
    },
    message: {
      value: "",
      error: undefined,
      validations: [isRequired, minLength3, maxLength400],
    },
  });

  const messageHandleChange = (e) => {
    const { value, name } = e.target;

    const { validations } = messageData[name];

    let error;

    for (let i = 0; i < validations.length; i++) {
      const validation = validations[i];
      const errorMessage = validation(value);

      if (errorMessage) {
        error = errorMessage;
        break;
      }
    }
    setMessageData((prev) => {
      return {
        ...prev,
        [name]: {
          ...prev[name],
          value,
          error,
        },
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      email: { value: email },
      name: { value: name },
      message: { value: message },
      phone: { value: phone },
    } = e.target;

    const messageFormData = {
      email,
      name,
      message,
      phone,
    };
    dispatch(sendMessage({ messageFormData }));
    e.target.reset();
  };

  return (
    <div className="contact_form" onSubmit={onSubmit}>
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              id="contacterEmail"
              name="email"
              placeholder="Write Your email"
              type="email"
              onChange={messageHandleChange}
              invalid={!!messageData.email.error}
            />
            {!!messageData.email.error && (
              <FormFeedback>{messageData.email.error}</FormFeedback>
            )}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              id="contacterNAme"
              onChange={messageHandleChange}
              name="name"
              type="text"
              placeholder="Type Your name"
              invalid={!!messageData.name.error}
            />
            {!!messageData.name.error && (
              <FormFeedback>{messageData.name.error}</FormFeedback>
            )}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Phone
          </Label>
          <Col sm={10}>
            <Input
              id="phoneNAme"
              onChange={messageHandleChange}
              name="phone"
              type="text"
              placeholder="Type Your Phone Number"
              invalid={!!messageData.phone.error}
            />
            {!!messageData.name.error && (
              <FormFeedback>{messageData.phone.error}</FormFeedback>
            )}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Message
          </Label>
          <Col sm={10}>
            <Input
              id="ContacterText"
              onChange={messageHandleChange}
              name="message"
              type="textarea"
              placeholder="Type Your message"
              invalid={!!messageData.message.error}
            />
            {!!messageData.message.error && (
              <FormFeedback>{messageData.message.error}</FormFeedback>
            )}
          </Col>
        </FormGroup>
        <Col
          sm={{
            offset: 2,
            size: 10,
          }}
        >
          <Button onSubmit={onSubmit}>Submit</Button>
        </Col>
      </Form>
    </div>
  );
};
