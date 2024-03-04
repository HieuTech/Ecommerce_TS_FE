import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";

export default function ModalBlock(props) {
  const { userStatus } = props;

  const [open, setOpen] = useState(false);
  const [isStatus, setIsStatus] = useState(true);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    //button ok
    setOpen(false);
    console.log("ok");
  };

  const handleCancel = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (userStatus == "ACTIVE") {
      setIsStatus(true);
    } else {
      setIsStatus(false);
    }
  }, [isStatus]);

  return (
    <>
      {isStatus ? (
        <div>
          <Button type="primary" danger onClick={showModal}>
            Block
          </Button>
          <Modal
            title="CONFIRM!"
            onOk={handleOk}
            open={open}
            onCancel={handleCancel}
          >
            Do you want to block this user?
          </Modal>
        </div>
      ) : (
        <div>
          <Button type="primary" onClick={showModal}>
            Unblock
          </Button>
          <Modal
            title="CONFIRM!"
            onOk={handleOk}
            open={open}
            onCancel={handleCancel}
          >
            Do you want to unblock this user?
          </Modal>
        </div>
      )}
    </>
  );
}
