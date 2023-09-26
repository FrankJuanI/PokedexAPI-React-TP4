import "./CardsLoader.css";
import { Card } from "../Card/Card.jsx";

function CardsLoader({ data }) {
  return (
    <div className="cardsLoader-container">
      {data?.map((pokemon, index) => {
        console.log(pokemon);
        return (
          <Card key={`${index}`} imageUrl={pokemon.url} name={pokemon.name} />
        );
      })}
    </div>
  );
}

export { CardsLoader };
