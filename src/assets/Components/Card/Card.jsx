import "./Card.css";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

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
    <Link to={`/pokemons/${name}`}>
      <div className="poke-card">
        {image && <img className="pokemon-img" src={image} alt="" />}
        <p className="pokemon-name">{name}</p>
      </div>
    </Link>
  );
}

export { Card };
