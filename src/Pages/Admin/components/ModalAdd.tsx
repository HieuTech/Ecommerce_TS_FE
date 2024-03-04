import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./Modal.scss"
export default function ModalAdd(props: any) {
  const { Categories } = props;
  
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {

    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSubmit = (e : any) =>{
    e.preventDefault();
    console.log("ok");
    
  }
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Product
      </Button>
      <Modal
        title="Add Product"
        onCancel={handleCancel}
        onOk={handleOk} 
        open={open}
      >
        <form onSubmit={handleSubmit} className="form-add">
          <div className="form-group">
            <label htmlFor="">Product Name</label>
            <input type="text" name="product_name" id="" />
          </div>
          <div className="form-group">
            <label htmlFor="">Product Description</label>
            <input type="text" name="product_desc" id="" />
          </div>
          <div className="form-group">
            <label htmlFor="">Product price</label>
            <input type="text" name="product_price" id="" />
          </div>
          <div className="form-group">
            <label htmlFor="">Product Rating</label>
            <input type="number" name="product_rating" id="" min={0} max={5} />
          </div>
          <div className="form-group">
            <label htmlFor="">Product OnSale</label>
            <input type="checkbox" name="product_onsale" id="" />
          </div>
          <div className="form-group">
            <label htmlFor="">Product Image</label>
            <input type="file" name="product_img" id="" />
          </div>
          <button type="submit" className="btn btn-add-product">
            Add Product
          </button>
        </form>
      </Modal>
    </>
  );
}
