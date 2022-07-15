import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { EditPostForm } from "./EditPostForm";

export const EditPostModal = ({ onClose, editModalPost }) => {
  return (
    <Modal toggle={onClose} isOpen={true}>
      <ModalHeader toggle={onClose}>Edit Your Post</ModalHeader>

      <ModalBody>
        <EditPostForm
          onSubmitCallback={onClose}
          editModalPost={editModalPost}
        />
      </ModalBody>
      <ModalFooter>
        <Button onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};
