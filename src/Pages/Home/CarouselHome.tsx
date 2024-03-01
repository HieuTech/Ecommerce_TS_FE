import React, { useState, useEffect } from "react";
import "./CarouselHome.scss";
const CarouselHome = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselData = [
    {
      img: "https://images.unsplash.com/photo-1602104980741-b87a33837f9f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: '"Cakes and bakes from the house of Queens!"',
      description:
        "Cakes can have a wide range of flavors, including classic options like vanilla, chocolate, and lemon, as well as more exotic choices such as red velvet, carrot, and fruitcake. They can be further customized with various fillings,",
    },
    {
      img: "https://images.unsplash.com/photo-1617343251257-b5d709934ddd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Making your life sweeter one bite at a time!",
      description:
        "They are also a popular choice for dessert at gatherings and parties. Cakes can be decorated with colorful icing, fondant, edible decorations, and even personalized messages, adding to their visual appeal.",
    },
    {
      img: "https://images.unsplash.com/photo-1551978129-b73f45d132eb?q=80&w=1117&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Cakes and bakes from the house of Queens!",
      description:
        "Cake is a sweet and baked dessert that comes in various shapes, sizes, and flavors. It is made from a combination of ingredients such as flour, sugar, eggs, butter or oil, and leavening agents like baking powder or baking soda. ",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (currentIndex) => (currentIndex + 1) % carouselData.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [carouselData.length]);

  return (
    <div className="carousel-container">
      {carouselData.map((item, index) => (
        <div
          key={index}
          className={`carousel-item ${
            index === currentImageIndex ? "active" : ""
          }`}
        >
          <img
            src={item.img}
            alt={`Slide ${index}`}
            className="carousel-image"
          />
          <div className="carousel-caption">
            <h3 className="carousel-title">{item.title}</h3>
            <p className="carousel-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselHome;
