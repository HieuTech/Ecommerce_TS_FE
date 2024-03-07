import React, { FormEvent, useState } from "react";
import { Button, Modal } from "antd";

const ModalChangeInfo: React.FC = (props) => {
  const { setUserData, userData } = props;
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Change Info
      </Button>
      <Modal
        title="Update User"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form onSubmit={handleSubmit} className="form-add">
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" name="userName" id="" />
          </div>
          <div className="form-group">
            <label htmlFor="">Phone</label>
            <input type="text" name="phone" id="" />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" name="email" id="" />
          </div>
          <div className="form-group">
            <label htmlFor="">Payment Method</label>
            <input type="text" name="paymentMethod" id="" />
          </div>
          <div className="form-group">
            <label htmlFor="">Gender</label>
            <label htmlFor="">Male</label>
            <input type="radio" name="gender" id="" value="male" />
            <label htmlFor="">Male</label>

            <input type="radio" name="gender" id="" value="female" />
          </div>
          
          <button type="submit" className="btn btn-add-product">
            Change
          </button>
        </form>
      </Modal>
    </>
  );
};

export default ModalChangeInfo;
