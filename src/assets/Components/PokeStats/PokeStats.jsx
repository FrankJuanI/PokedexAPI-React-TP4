import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { StatsBar } from "./StatsBar/StatsBar.jsx";
import { useMode } from "../../context/ModeContext.js";

function PokeStats() {
  const { id } = useParams();
  const [data, setData] = useState();
  const mode = useMode();

  useEffect(() => {
    const getPokeStats = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (response.ok) {
          const pokeData = await response.json();
          setData(pokeData);
          console.log(pokeData);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getPokeStats();
  }, []);

  if (!data) return;

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: mode === "light" ? "#fff" : "#1e1e1e",
      }}
    >
      <div
        className="PokeStats-container "
        style={{
          border: "1px solid #ddd",
          padding: "1.5em",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          maxWidth: "1000px",
          margin: "0 auto",
          backgroundColor: mode === "light" ? "#fff" : "#3e3e3e",
          color: mode === "light" ? "#3e3e3e" : "#fff",
        }}
      >
        <h2
          style={{
            fontSize: "4rem",
            margin: "0",
            fontFamily: "sans-serif",
            display: "block",
            marginLeft: "1em",
          }}
        >
          {id}
        </h2>
        <div
          className="PokeData"
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            className="PokeStats-firstColumn"
            style={{
              position: "relative",
              width: "50%",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={data.sprites.front_default ?? ""}
                alt=""
                style={{ width: "350px", height: "300px" }}
              />
            </div>
          </div>
          <div className="PokeStats-secondColumn">
            {data &&
              data.stats.map((stats) => {
                {
                  console.log(stats);
                }
                return (
                  <StatsBar
                    key={stats.stat.name + data.base_stat}
                    data={stats}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export { PokeStats };
