import React, { useEffect } from "react";
import { categoriesAction } from "../../../Stores/Slice/CategoriesSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import apis from "../../../apis";
export default function ShopProduct(props: any) {
  const { listProduct } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const displayRating = (rating: number) => {
    const stars: React.ReactNode[] = [];

    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className="fa fa-star"></i>);
    }
    return stars;
  };
  const handleClick = async (id: number) => {
    try {
      const res = await apis.categoriesApi.getAllCategories();
      const categoriesList = res.data;
      dispatch(categoriesAction.setData({ id, categoriesList }));
    } catch (error) {
      console.log("error", error);
    }
    navigate("/product-detail");
  };

  return (
    <div className="product-grid">
      {listProduct?.map((product: any, index: number) => (
        <div
          key={index}
          className="product-card"
          onClick={() => {
            handleClick(product.id);
          }}
        >
          <img src={product.img} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>

          {product.on_sale ? (
            <div className="on_sale">
              <s className="product-price">{product.price}</s>
              <p className="product-price-sale">{product.price_sale}</p>
            </div>
          ) : (
            <p className="product-price">{product.price}</p>
          )}
          <div className="rating">{displayRating(product.rating)}</div>
        </div>
      ))}
    </div>
  );
}
