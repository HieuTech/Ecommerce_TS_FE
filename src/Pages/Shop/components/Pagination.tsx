import React, { useEffect } from "react";
import apis from "../../../apis";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Pagination(props: any) {
  const { listProduct, setListProduct } = props;
  const [isPageActive, setIsPageActive] = useState(1);
  const productPerPage = useState(import.meta.env.VITE_PRODUCT_PER_PAGE);

  //handleChangePage
  const handleChangePage = async (pageNumb: number) => {
    setIsPageActive(pageNumb);

    try {
      const res = await apis.productApi.getProductByPage(
        pageNumb,
        Number(productPerPage[0])
      );
      setListProduct(res.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

 useEffect(() => {
   const fetchProduct = async () => {
     const res = await apis.productApi.getProductByPage(
       1,
       Number(productPerPage[0])
     );
     setListProduct(res.data.data);
   };
   fetchProduct();
 }, []);

   

  return (
    <div className="pagination-container">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#">
            Previous
          </a>
        </li>
        <li
          className={`page-item ${
            isPageActive === 1 ? "active-pagination{" : ""
          }`}
        >
          <Link
            className="page-link"
            to={"#"}
            onClick={() => {
              handleChangePage(1);
            }}
          >
            1
          </Link>
        </li>
        <li
          className={`page-item ${
            isPageActive === 2 ? "active-pagination{" : ""
          }`}
        >
          <Link
            className="page-link"
            to={"#"}
            onClick={() => {
              handleChangePage(2);
            }}
          >
            2
          </Link>
        </li>
        <li
          className={`page-item ${
            isPageActive === 3 ? "active-pagination{" : ""
          }`}
        >
          <Link
            className="page-link"
            to={"#"}
            onClick={() => {
              handleChangePage(3);
            }}
          >
            3
          </Link>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
}
