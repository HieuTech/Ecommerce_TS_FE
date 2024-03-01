import React from "react";
import "./SocialMedia.scss"; // Path to your SCSS/CSS file for styling
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  // Array of image URLs, replace these with your actual image links
  const images = [
    "https://images.unsplash.com/photo-1560156710-0580247f9f69?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661431464039-8f0c37042132?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1663924748884-7a288d61eb8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1690214491960-d447e38d0bd0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNha2V8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1668698355395-60cd173f121b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNha2V8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1668703458969-d2407d2f720f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNha2V8ZW58MHx8MHx8fDA%3D",
  ];

  return (
    <section className="instagram-section">
      <div className="instagram-call-to-action">
        <h2>FOLLOW US ON INSTAGRAM</h2>
        <p>Sweet moments are saved as memories.</p>
        <Link href="" className="instagram-link">
          <i className="fa fa-instagram"></i> @sweetcake
        </Link>
      </div>
      <div className="instagram-image-gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </section>
  );
};

export default SocialMedia;
