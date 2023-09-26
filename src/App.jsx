import { Card } from "./assets/Components/Card/Card.jsx";
import { SearchBar } from "./assets/Components/SearchBar/SearchBar.jsx";
import { CardsLoader } from "./assets/Components/CardsLoader.jsx/CardsLoader.jsx";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [dataApi, setDataApi] = useState();
  const [refresh, setRefresh] = useState();

  const GetData = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=150"
      );
      if (response.ok) {
        const data = await response.json();
        const results = await data.results;
        setDataApi(results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  console.log("Full data: ", dataApi);

  if (dataApi === undefined) {
    return;
  }

  return (
    <div className="api">
      <SearchBar />
      <CardsLoader data={dataApi} />
    </div>
  );
}

export default App;
