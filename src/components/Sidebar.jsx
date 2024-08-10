import { useState } from "react";
import "../App.css";
import "../DarkMode/Mode.css";
import { useTheme } from "./ThemeContext";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { darkMode } = useTheme();

  const openNav = () => {
    setSidebarOpen(true);
  };

  const closeNav = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <div className={`sidebar ${isSidebarOpen ? "show" : ""}`}
      style={{
        backgroundColor: darkMode ? "#415d7a" : "#eee",
            color: darkMode ? "#fff" : "black"
      }}
      >
        <button
         style={{
            color: darkMode ? "#fff" : "black"
         }}
         className="closebtn" onClick={closeNav}>
          ×
        </button>
        <h2>GEMINI</h2>
        <p>Some content in the Sidebar.</p>
      </div>

      <div id="main">
        <button
          style={{
            backgroundColor: darkMode ? "#415d7a" : "#eee",
            color: darkMode ? "#fff" : "black"
          }}
          className="openbtn"
          onClick={openNav}
        >
          ☰ GEMINI
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
