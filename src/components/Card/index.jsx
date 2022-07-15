import React from "react";
import { Card, Button, CardBody, CardText, CardTitle } from "reactstrap";
import "./styles.css";

export const CardComponent = ({ post, deleteHandle, editModalOpen }) => {
  const { id } = post;
  return (
    <Card
      style={{ width: "300px", minHeight: "270px", marginTop: "5px" }}
      className="mx-2"
    >
      <CardBody>
        <CardTitle tag="h5" style={{ fontWeight: "600", marginBottom: "20px" }}>
          {post.title}
        </CardTitle>

        <CardText style={{ marginBottom: "30px" }}>{post.body}</CardText>
        <Button
          color="primary"
          className="mx-2"
          onClick={() => deleteHandle(id)}
        >
          Delete
        </Button>
        <Button
          color="primary"
          className="mx-2"
          onClick={() => editModalOpen(post)}
        >
          Edit{" "}
        </Button>
      </CardBody>
    </Card>
  );
};
