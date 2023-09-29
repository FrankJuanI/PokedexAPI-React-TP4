import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  IoArrowBackCircleSharp,
  IoArrowForwardCircleSharp,
} from "react-icons/io5";
import { StatsBar } from "./StatsBar/StatsBar.jsx";

function PokeStats() {
  const { id } = useParams();
  const [data, setData] = useState();

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
      className="PokeStats-container "
      style={{
        backgroundColor: "#eee",
        border: "1px solid #ddd",
        padding: "1.5em",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        maxWidth: "1000px",
        margin: "0 auto",
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
            {/* <button style={{ backgroundColor: "transparent", border: "none" }}>
                <IoArrowBackCircleSharp style={{ width: "5rem", height: "5rem" }} />
              </button> */}
            <img
              src={data.sprites.front_default ?? ""}
              alt=""
              style={{ width: "350px", height: "300px" }}
            />
            {/* <button style={{ backgroundColor: "transparent", border: "none" }}>
                <IoArrowForwardCircleSharp
                  style={{ width: "5rem", height: "5rem" }}
                />
              </button> */}
          </div>
        </div>
        <div className="PokeStats-secondColumn">
          {data &&
            data.stats.map((stats) => {
              {
                console.log(stats);
              }
              return (
                <StatsBar key={stats.stat.name + data.base_stat} data={stats} />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export { PokeStats };
