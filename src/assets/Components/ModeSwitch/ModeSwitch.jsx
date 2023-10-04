import "./ModeSwitch.css";
import { useMode } from "../../context/ModeContext";

function ModeSwitch({ handleSwitch }) {
  const mode = useMode();
  return (
    <div
      className="switch-container"
      style={{ backgroundColor: mode === "light" ? "#fff" : "#1e1e1e" }}
    >
      <label htmlFor="switch" className="switch">
        <input
          type="checkbox"
          name="switch"
          id="switch"
          className="checkbox"
          onClick={() => handleSwitch()}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export { ModeSwitch };
