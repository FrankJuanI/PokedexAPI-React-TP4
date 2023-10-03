import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./assets/Components/HomePage/HomePage.jsx";
import "./App.css";
import { PokeStats } from "./assets/Components/PokeStats/PokeStats.jsx";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

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
    <Routes>
      <Route
        path="/"
        element={
          <HomePage filteredPokemons={filteredPokemons} setSearch={setSearch} />
        }
      />
      <Route path="/pokemons/:id" element={<PokeStats />} />
    </Routes>
  );
}

export default App;
