import React, { useState } from "react";
import { Button, Modal } from "antd";

export default function ModalConfirm(props: any) {
  const { Categories } = props;

  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    //button ok
    setOpen(false);
    
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" danger onClick={showModal}>
        DELETE
      </Button>
      <Modal
        title="CONFIRM!"
        onOk={handleOk}
        open={open}
        onCancel={handleCancel}
      >
        Do you want to delete it?
      </Modal>
    </>
  );
}
