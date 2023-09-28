function StatsBar({ data }) {
  return (
    <div className="StatBar">
      <h3 style={{ margin: "0" }}>{data.stat.name}</h3>
      <div
        style={{
          width: "300px",
          height: "30px",
          backgroundColor: "gray",
          display: "flex",
          alignItems: "center",
          margin: "1em 0",
        }}
      >
        <div
          style={{
            height: "24px",
            left: "1px",
            backgroundColor: "red",
            position: "relative",
            width: "60%",
          }}
        ></div>
      </div>
    </div>
  );
}

export { StatsBar };
