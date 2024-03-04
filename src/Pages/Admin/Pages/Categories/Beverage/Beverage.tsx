import React, { useEffect, useState } from "react";
import apis from "../../../../../apis";


import ModalConfirm from "../../../components/ModalConfirm";
import ModalAdd from "../../../components/ModalAdd";
export default function Beverage(props: any) {
  const { Beverage } = props;
  const [stateBeverage, setStateBeverage] = useState();

  const handleDelete = (id) => {};
  useEffect(() => {
    const fetchBeverage = async () => {
      const res = await apis.categoriesApi.getCategoriesByName("Beverage");
      console.log("res", res.data[0]);

      setStateBeverage(res.data[0]);
    };
    fetchBeverage();
  }, []);
  return (
    <div>
      <div className="categories-container">
        <h1 className="categories-title">Categories {stateBeverage?.name} </h1>
        <ModalAdd Categories={stateBeverage} />
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
          {stateBeverage?.products.map((product, index: number) => {
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
