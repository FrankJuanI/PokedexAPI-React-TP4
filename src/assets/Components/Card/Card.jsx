import "./Card.css";
import { useState, useEffect } from "react";

function Card({ name, imageUrl }) {
  const [image, setImage] = useState();

  const getImage = async (image) => {
    try {
      const response = await fetch(image);
      if (response.ok) {
        const data = await response.json();
        const results = await data.results;
        setImage(results);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getImage(imageUrl);
  }, []);
  console.log(image);
  return (
    <div className="PokeCard">
      <img src={image} alt="" />
      <p>{name}</p>
    </div>
  );
}

export { Card };
