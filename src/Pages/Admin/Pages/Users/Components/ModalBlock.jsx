import React, { useEffect, useState } from "react";
import { Button, Modal, message } from "antd";
import apis from "../../../../../apis";

export default function ModalBlock(props) {
  const { user } = props;
  const [open, setOpen] = useState(false);
  const [isStatus, setIsStatus] = useState(true);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {

    const checkStatus = () =>{
      if(user.status == "ACTIVE"){
        return {
          id: user.id,
          status: "INACTIVE"
        }
      }else{
        return {
          id: user.id,
          status: "ACTIVE"
        }
      }
    }
    console.log("status",checkStatus());
     
      try {
        const res = await apis.userApi.updateStatusUser(checkStatus())
        message.success("Cập nhật trạng thái thành công");
        window.location.reload();
        console.log("res", res.data);
      } catch (error) {
        console.log("error",error);
      }
   
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (user.status == "ACTIVE") {
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
