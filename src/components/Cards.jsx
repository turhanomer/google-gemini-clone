import { useContext, useEffect } from "react";
import "../App.css";
import "../DarkMode/Mode.css";
import { useTheme } from "./ThemeContext";
import { Context } from "../context/Context";

function Cards() {
  const { onSent } = useContext(Context);

  const { darkMode } = useTheme();
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
    #custom-input::placeholder {
      color: ${darkMode ? "#ddd" : "black"};
    }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [darkMode]);

  const handleCardClick = (text) => {
    onSent(text);
  };

  return (
    <>
      <div className="container d-flex justify-content-center flex-wrap row-auto col-auto position-absolute top-50 start-50 translate-middle">
        <span>
          <div
            className="card m-1 pb-4"
            style={{
              width: "10rem",
              backgroundColor: darkMode ? "#415d7a" : "#eee",
              color: darkMode ? "#fff" : "black",
            }}
          >
            <div
              onClick={() => handleCardClick("Food suggestions")}
              className="card-body"
            >
              <p className="card-text">Food suggestions</p>
            </div>
          </div>
        </span>
        <span>
          <div
            className="card m-1"
            style={{
              width: "10rem",
              backgroundColor: darkMode ? "#415d7a" : "#eee",
              color: darkMode ? "#fff" : "black",
            }}
          >
            <div
              onClick={() => handleCardClick("Youtube creator tips")}
              className="card-body"
            >
              <p className="card-text">Youtube creator tips</p>
            </div>
          </div>
        </span>
        <span>
          <div
            className="card m-1"
            style={{
              width: "10rem",
              backgroundColor: darkMode ? "#415d7a" : "#eee",
              color: darkMode ? "#fff" : "black",
            }}
          >
            <div
              onClick={() => handleCardClick("Improvements to your resume")}
              className="card-body"
            >
              <p className="card-text">Improvements to your resume</p>
            </div>
          </div>
        </span>
      </div>
    </>
  );
}

export default Cards;
