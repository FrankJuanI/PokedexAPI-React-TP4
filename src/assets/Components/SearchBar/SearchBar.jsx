import "./SearchBar.css";

function SearchBar({ setSearch }) {
  return (
    <div className="header">
      <input
        className="input"
        type="text"
        placeholder="Search..."
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
}

export { SearchBar };
