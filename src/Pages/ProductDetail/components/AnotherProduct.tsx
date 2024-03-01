import React, { useState, useEffect } from "react";

export default function AnotherProduct(props: any) {
  const { showCategories, setProductDetail } = props;
  
  
  // Automatically slide to the next product every 2 seconds

    const handleSelect = (id:number)=>{
        const product = showCategories.products.find(product => 
            product.id ==id)

        if(!product){
            return false
        }
        setProductDetail(product)
    }
  
  return (
    <div>
      <div className="detail-content">
        <div className="content-img">
          <img
            className="content-img"
            src="https://img.freepik.com/free-vector/flat-horizontal-banner-template-world-vegan-day-event_23-2150801317.jpg?size=626&ext=jpg"
            alt=""
          />
        </div>
        <div className="main-content">
          <h3 className="content-title">WHY VEGAN CAKE?</h3>
          <span>ONLY THE HIGHEST QUALITY INGREDIENTS</span>
          <p className="content-desc">
            Ingredients: Crust (Enriched Flour [Unbleached Wheat Flour, Malted
            Barley Flour, Niacin, Reduced Iron, Thiamin Mononitrate, Riboflavin,
            Folic Acid], Filtered Water, Yeast, Sea Salt, Olive Oil, Canola Oil,
            Organic Brown Sugar), Tomato Sauce (Tomatoes, Basil, Lemon Juice,
            Apple Cider Vinegar, Salt), Vegan Cheese (Filtered Water, Coconut
            Oil, Potato Starch, Tapioca Starch, Sunflower Oil, Sea Salt, Calcium
            Citrate, Natural Flavor [Vegan Sources], Chickpea Protein, Konjac
            and Xanthan Gums, Potato Protein, Annatto and Turmeric Extracts
            [color], Powdered Cellulose Added To Prevent Caking), Beyond
            Plant-Based Pepperoni Slices (Water, Refined Coconut Oil,
            Expeller-Pressed Canola Oil, Pea Protein*, Rice Starch, Cocoa
            Butter, Pea Starch, Salt, Methylcellulose, Natural Flavors [with
            Celery Oil], 2% or less of Rice Protein, Paprika, Yeast Extract,
            Mung Bean Starch, Garlic Powder, Spices [Including Mustard],
            Ascorbic Acid, Vegetable Juice Color, Red Beet Powder Color,
            Lycopene Color [from Tomato], Extractives of Paprika, Natural Smoke
            Flavor), Garlic. Contains: Wheat, Soy.
          </p>
        </div>
      </div>
      {/* another product */}
      <div className="another-product">
        <hr />
        <h3 className="another-title">YOU MIGHT ALSO LIKE</h3>
        <div className="another-grid">
          {showCategories.products?.map((product, index: number) => (
            <div key={index} className="another-grid-item"
            onClick={()=>{
                handleSelect(product.id);
            }}
            >
              <img
                className="another-img"
                src={product.img}
                alt={product.name}
              />
              <h2 className="another-name">{product.name}</h2>
              <p className="another-price">{product.price}</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
