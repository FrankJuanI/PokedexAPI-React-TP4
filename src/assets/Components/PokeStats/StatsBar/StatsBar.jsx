import "./StatsBar.css";

function StatsBar({ data }) {
  return (
    <div className="stat-bar">
      <div className="pokemonn-name">
        <h2 style={{ margin: "0", display: "inline-block" }}>
          {data.stat.name}
        </h2>
        <h3>{data.base_stat}</h3>
      </div>
      <div className="stat-bar-container">
        <div
          className="stat-value-bar"
          style={{
            width: `calc(${data.base_stat}%)`,
          }}
        ></div>
      </div>
    </div>
  );
}

export { StatsBar };
