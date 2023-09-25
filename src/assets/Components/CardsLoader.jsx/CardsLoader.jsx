import "./CardsLoader.css";
import { Card } from "../Card/Card.jsx";

function CardsLoader({ data }) {
  console.log("CorsLoader:", data);
  return (
    <div className="cardsLoader-container">
      {data &&
        data.map((pokemon, index) => {
          return (
            <Card key={`${index}`} image={pokemon.url} name={pokemon.name} />
          );
        })}
    </div>
  );
}

export { CardsLoader };
