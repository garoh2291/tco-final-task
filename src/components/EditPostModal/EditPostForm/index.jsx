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

import { useEditTaskForm } from "../../../helpers/forms";
import { changePostThunk } from "../../../Redux/postsSlice";

export const EditPostForm = ({ onSubmitCallback, editModalPost }) => {
  const [inputsData, handleChange] = useEditTaskForm(editModalPost);
  const dispatch = useDispatch();
  const { id } = editModalPost;

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      title: { value: title },
      body: { value: body },
    } = inputsData;

    const editFormData = {
      title,
      body,
    };

    dispatch(changePostThunk({ id, editFormData }));

    onSubmitCallback();
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label for="titleId">Title</Label>
        <Input
          value={inputsData.title.value}
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
          value={inputsData.body.value}
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
      {/* Date Picker */}
      <Button color="primary">Edit Task</Button>{" "}
    </Form>
  );
};
