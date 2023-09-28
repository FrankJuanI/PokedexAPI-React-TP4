import "./Card.css";
import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ name }) {
  let navigate = useNavigate();
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

  const handleclick = () => {
    navigate(`/pokemons/${name}`, { replace: true });
  };

  return (
    <div className="PokeCard" onClick={handleclick}>
      {image && <img className="pokemon-img" src={image} alt="" />}
      <p className="pokemon-name">{name}</p>
      {/* <Link to={`/pokemons/${name}`}> a </Link> */}
    </div>
  );
}

export { Card };
