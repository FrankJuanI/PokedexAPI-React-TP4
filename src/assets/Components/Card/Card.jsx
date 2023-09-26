import "./Card.css";
import { useState, useEffect } from "react";

function Card({ name, imageUrl }) {
  const [image, setImage] = useState();

  const getImageurl = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);
      if (response.ok) {
        const data = await response.json();
        setImage(data.sprites.front_default);
      }
    } catch (err) {}
  };

  useEffect(() => {
    getImageurl(imageUrl);
  }, []);

  console.log(image);

  return (
    <div className="PokeCard">
      <img className="pokemon-img" src={image} alt="" />
      <p className="pokemon-name">{name}</p>
    </div>
  );
}

export { Card };
