import React, { useEffect, useState } from "react";
import apis from "../../../../../apis";

import ModalAdd from "../../../components/ModalAdd";
import ModalConfirm from "../../../components/ModalConfirm";
export default function BestSeller() {
  const [stateBestSeller, setStateBestSeller] = useState();

  const handleDelete = (id) => {};

  useEffect(() => {
    const fetchBestSeller = async () => {
      const res = await apis.productApi.sortByRating(4);

      setStateBestSeller(res.data);
    };
    fetchBestSeller();
  }, []);
  return (
    <div>
      <div className="categories-container">
        <h1 className="categories-title">Best Seller </h1>
        <ModalAdd Categories={stateBestSeller} />
        <table className="product-table">
          <tr>
            <th className="table-header">STT</th>
            <th className="table-header">ProductName</th>
            <th className="table-header">Description</th>
            <th className="table-header">Price</th>
            <th className="table-header">Rating</th>
            <th className="table-header">Image</th>
            <th className="table-header">Delete</th>
          </tr>
          {stateBestSeller?.map((product, index: number) => {
            return (
              <tr className="product-row">
                <td className="table-cell" key={index}>
                  {index}
                </td>
                <td className="table-cell">{product.name}</td>
                <td className="table-cell">{product.description}</td>
                <td className="table-cell">{product.price}</td>
                <td className="table-cell">{product.rating}</td>
                <td className="table-cell">
                  <img src={product.img} alt="" className="img" />
                </td>
                <td className="table-cell">
                  <ModalConfirm productId={product.id} />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
