import { Card } from "./assets/Components/Card/Card.jsx";
import { SearchBar } from "./assets/Components/SearchBar/SearchBar.jsx";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [dataApi, setDataApi] = useState();
  const [filter, setFilter] = useState();
  const [search, setSearch] = useState("");

  const GetData = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=150"
      );
      if (response.ok) {
        const data = await response.json();
        const results = data.results;
        setDataApi(results);
        if (filter === undefined) setFilter(results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetData();
    setFilter(
      dataApi?.filter((pokemon) => {
        if (search === "") {
          return pokemon;
        } else if (pokemon.name.toLowerCase().includes(search.toLowerCase())) {
          return pokemon;
        }
      })
    );
  }, [search]);

  console.log("filter: ", filter);

  return (
    <div className="api">
      <SearchBar setSearch={setSearch} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          position: "relative",
          flexWrap: "wrap",
          gap: "2em",
          margin: "0 auto",
          justifyContent: "center",
        }}
        className="CardsContainer"
      >
        {filter &&
          filter.map((pokemon) => (
            <Card name={pokemon.name} imageUrl={pokemon.url} search={search} />
          ))}
      </div>
    </div>
  );
}

export default App;
