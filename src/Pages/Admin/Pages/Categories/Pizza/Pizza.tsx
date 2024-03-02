import React, { useEffect, useState } from "react";
import apis from "../../../../../apis";
// import "./Pizza.scss"
import "../../Components/Modal.scss";

import ModalAdd from "../../Components/ModalAdd";
import ModalConfirm from "../../Components/ModalConfirm";
export default function Pizza(props: any) {
  const { Pizza } = props;
  const [statePizza, setStatePizza] = useState();

  const handleDelete = (id) => {};
  useEffect(() => {
    const fetchPizza = async () => {
      const res = await apis.categoriesApi.getCategoriesByName(Pizza);
      console.log("res", res.data[0]);

      setStatePizza(res.data[0]);
    };
    fetchPizza();
  }, []);
  return (
    <div>
      <div className="categories-container">
        <h1 className="categories-title">Categories {statePizza?.name} </h1>
        <ModalAdd Categories={statePizza} />
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
          {statePizza?.products.map((product, index: number) => {
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
                  
                    <ModalConfirm productId={product.id}/>
                  
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
