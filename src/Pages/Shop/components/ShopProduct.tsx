import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Product } from "../../../apis/product.api";

export default function ShopProduct(props: any) {
  const { listProduct } = props;

  const navigate = useNavigate();
  const displayRating = (rating: number) => {
    const stars: React.ReactNode[] = [];

    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className="fa fa-star"></i>);
    }
    return stars;
  };
  const handleClick = async (id: number) => {

    navigate(`/product-detail/${id}`);
  };

  return (
    <div className="product-grid">
      {listProduct?.map((product: Product, index: number) => (
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
