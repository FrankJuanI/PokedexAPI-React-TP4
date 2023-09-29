import "/StatsBar.css";

function StatsBar({ data }) {
  return (
    <div className="stat-bar">
      <div className="pokemon-name">
        <h3 style={{ margin: "0", display: "inline-block" }}>
          {data.stat.name}
        </h3>
        <h2>{data.base_stat}</h2>
      </div>
      <div className="stat-bar-container">
        <div
          className="stat-bar"
          style={{
            width: `calc(${data.base_stat}%)`,
          }}
        ></div>
      </div>
    </div>
  );
}

export { StatsBar };
