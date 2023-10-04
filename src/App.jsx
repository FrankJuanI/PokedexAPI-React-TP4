import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./assets/Components/HomePage/HomePage.jsx";
import "./App.css";
import { PokeStats } from "./assets/Components/PokeStats/PokeStats.jsx";
import { ModeContext } from "./assets/context/ModeContext.js";
import { ModeSwitch } from "./assets/Components/ModeSwitch/ModeSwitch.jsx";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState("light");

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  const getData = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=300"
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

  const handleSwitch = () => {
    mode === "dark" ? setMode("light") : setMode("dark");
  };

  return (
    <ModeContext.Provider value={mode}>
      <ModeSwitch handleSwitch={handleSwitch} />
      <Routes>
        <Route
          path="/pokemons"
          element={
            <HomePage
              filteredPokemons={filteredPokemons}
              setSearch={setSearch}
            />
          }
        />
        <Route path="/pokemons/:id" element={<PokeStats />} />
      </Routes>
    </ModeContext.Provider>
  );
}

export default App;
