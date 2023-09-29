import { Card } from "./assets/Components/Card/Card.jsx";
import { SearchBar } from "./assets/Components/SearchBar/SearchBar.jsx";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  // const [filteredPokemons, setFilteredPokemons] = useState();
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  const getData = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=100"
      );
      if (response.ok) {
        const data = await response.json();
        const results = data.results;
        setPokemons(results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

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

export default App;
