import React from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

import { useAddTaskForm } from "../../../helpers/forms";
import { addPostThunk } from "../../../Redux/postsSlice";
import "./styles.css";

export const PostHeader = () => {
  const dispatch = useDispatch();
  const [inputsData, handleChange] = useAddTaskForm();

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      title: { value: title },
      body: { value: body },
    } = inputsData;

    const newPost = {
      title,
      body,
    };

    if (title !== "" && body !== "") {
      dispatch(addPostThunk(newPost));
    }
    e.target.reset();
  };

  return (
    <div className="post_header">
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="titleId">Title</Label>
          <Input
            id="titleId"
            name="title"
            placeholder="Post title"
            type="text"
            onChange={handleChange}
            invalid={!!inputsData.title.error}
          />
          {!!inputsData.title.error && (
            <FormFeedback>{inputsData.title.error}</FormFeedback>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="bodyId">Description</Label>
          <Input
            id="bodyId"
            name="body"
            placeholder="Post Body"
            type="text"
            onChange={handleChange}
            invalid={!!inputsData.body.error}
          />
          {!!inputsData.body.error && (
            <FormFeedback>{inputsData.body.error}</FormFeedback>
          )}
        </FormGroup>
        <Button color="primary" onSubmit={onSubmit}>
          Add Task
        </Button>{" "}
      </Form>
    </div>
  );
};
