import { SearchBar } from "../SearchBar/SearchBar";
import { Card } from "../Card/Card.jsx";

function HomePage({ filteredPokemons, setSearch }) {
  return (
    <div className="api">
      <SearchBar setSearch={setSearch} />
      <div className="cards-container">
        {filteredPokemons.map((pokemon) => (
          <Card name={pokemon.name} />
        ))}
      </div>
    </div>
  );
}

export { HomePage };
