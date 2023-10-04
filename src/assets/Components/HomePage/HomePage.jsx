import { SearchBar } from "../SearchBar/SearchBar";
import { Card } from "../Card/Card.jsx";
import { useMode } from "../../context/ModeContext";

function HomePage({ filteredPokemons, setSearch }) {
  const mode = useMode();
  return (
    <div style={{ backgroundColor: mode === "light" ? "#fff" : "#1e1e1e" }}>
      <SearchBar setSearch={setSearch} />
      <div className="cards-container" style={{ paddingBottom: "1.5em" }}>
        {filteredPokemons.map((pokemon) => (
          <Card name={pokemon.name} />
        ))}
      </div>
    </div>
  );
}

export { HomePage };
