import "./Card.css";
import { useState, useEffect } from "react";

function Card({ name }) {
  const [image, setImage] = useState();
  const getImageurl = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (response.ok) {
        const data = await response.json();
        setImage(data.sprites.front_default);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getImageurl();
  }, [name]);

  return (
    <div className="PokeCard">
      {image && <img className="pokemon-img" src={image} alt="" />}
      <p className="pokemon-name">{name}</p>
    </div>
  );
}

export { Card };
