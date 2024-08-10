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
      <div
        className={`sidebar ${isSidebarOpen ? "show" : ""}`}
        style={{
          backgroundColor: darkMode ? "#2f4257" : "#eee",
          color: darkMode ? "#fff" : "black",
          zIndex: "1",
          borderRadius: "0px 10px 10px 0px",
        }}
      >
        <button
          style={{
            color: darkMode ? "#fff" : "black",
          }}
          className="closebtn"
          onClick={closeNav}
        >
          ×
        </button>
        <button
          style={{
            backgroundColor: darkMode ? "#354c64" : "#eee",
            color: darkMode ? "#fff" : "black",
          }}
          id="chat"
        >
          + New Chat
        </button>
        <hr style={{ marginTop: "100px" }} />
        <h4 style={{ marginLeft: "15px" }}>Recent</h4>
      </div>
      <div id="main">
        <button
          style={{
            backgroundColor: darkMode ? "#354c64" : "#eee",
            color: darkMode ? "#fff" : "black",
            zIndex: "1",
          }}
          className="openbtn"
          onClick={openNav}
        >
          ☰ Gemini
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
