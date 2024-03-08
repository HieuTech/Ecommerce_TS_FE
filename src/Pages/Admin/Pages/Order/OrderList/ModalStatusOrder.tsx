import React, { useState } from "react";
import { Button, Modal } from "antd";
import apis from "../../../../../apis";
import { ReceiptStatus } from "../../../../../apis/receipt.api";
export default function ModalStatusOrder(props) {
    const {order} = props;
    console.log("order",order);
    
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

  const handleChangeStatus = async (status: ReceiptStatus) =>{


    if(status == ReceiptStatus.APPROVED){

        const updateReceipt = {
            id: order.id,
            status : ReceiptStatus.APPROVED
        }
        console.log("update",updateReceipt);
        
        try {
            const res = await apis.receiptApi.updateReceiptApprove(updateReceipt)
            console.log("res approved",res.data);
            
        } catch (error) {
            console.log("error", error);   
        }

        //update user receipt status

        const updateUserStatusReceipt = {
            id: order.user_id,
            receipt_id: order.id,
            status: ReceiptStatus.APPROVED
        }

        try {
            const res = await apis.receiptApi.updateReceiptApprove(updateUserStatusReceipt)
            console.log("res approved",res.data);
            
        } catch (error) {
            console.log("error", error);   
        }
        window.location.reload();


    }
    if(status == ReceiptStatus.CANCEL){
        const updateReceipt = {
            id: order.id,
            status: ReceiptStatus.CANCEL
        }
        try {
            const res = await apis.receiptApi.updateReceiptApprove(updateReceipt)

        } catch (error) {
            console.log("error", error);   
        }

        const updateUserStatusReceipt = {
            id: order.user_id,
            receipt_id: order.id,
            status: ReceiptStatus.CANCEL
        }
        console.log("update",updateUserStatusReceipt);
        
        try {
            const res = await apis.receiptApi.updateReceiptApprove(updateUserStatusReceipt)
            
        } catch (error) {
            console.log("error", error);   
        }
        window.location.reload();

    }
       
    
  }
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Check Status
      </Button>
      <Modal
        title="CONFIRM!"
        onOk={handleOk}
        open={open}
        onCancel={handleCancel}
      >
        <div className="container-orderlist">
        <button className="btn btn-modal-status-approved" onClick={()=>{
            handleChangeStatus(ReceiptStatus.APPROVED)
        }}>Approved</button>
        <button className="btn btn-modal-status-cancel"
        onClick={()=>{
            handleChangeStatus(ReceiptStatus.CANCEL)
        }}
        >Cancel</button></div>
      </Modal>
    </>
  );
}
