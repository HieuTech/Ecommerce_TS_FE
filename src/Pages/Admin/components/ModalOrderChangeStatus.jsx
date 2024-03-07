import React, { useState } from "react";
import { Button, Modal } from "antd";

export default function ModalOrderChangeStatus(props: any) {
    const {orderId} = props
  const [open, setOpen] = useState(false);
 console.log("order");
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
      <Button type="primary" onClick={showModal}>
        Change Status
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
