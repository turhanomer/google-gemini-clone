import { useEffect } from "react";
import "../App.css";
import "../DarkMode/Mode.css";
import { useTheme } from "./ThemeContext";

function Input() {
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

  return (
    <>
      <div className="container d-flex justify-content-center flex-wrap row-auto col-auto position-absolute top-50 start-50 translate-middle">
        <span>
          <div
            className="card m-1 pb-4"
            style={{ width: "10rem", backgroundColor: darkMode ? "#415d7a" : "#eee",
              color: darkMode ? "#fff" : "black"
            }}
          >
            <div className="card-body">
              <p className="card-text">Food suggestions</p>
            </div>
          </div>
        </span>
        <span>
          <div
            className="card m-1"
            style={{ width: "10rem", backgroundColor: darkMode ? "#415d7a" : "#eee",
              color: darkMode ? "#fff" : "black"
            }}
          >
            <div className="card-body">
              <p className="card-text">Youtube creator tips</p>
            </div>
          </div>
        </span>
        <span>
          <div
            className="card m-1"
            style={{ width: "10rem", backgroundColor: darkMode ? "#415d7a" : "#eee",
              color: darkMode ? "#fff" : "black"
            }}
          >
            <div className="card-body">
              <p className="card-text">Improvements to your resume</p>
            </div>
          </div>
        </span>
      </div>
      <div
        id="inputId"
        className="input-group position-absolute w-50 start-50 translate-middle"
      >
        <span
          className="input-group-text"
          id="basic-addon1"
          style={{
            backgroundColor: darkMode ? "#415d7a" : "#eee",
            color: darkMode ? "#fff" : "black",
            border: "1px solid #415d7a",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </span>
        <input
          type="text"
          className="form-control p-2"
          id="custom-input"
          aria-label="Username"
          aria-describedby="basic-addon1"
          placeholder="Search"
          style={{
            backgroundColor: darkMode ? "#415d7a" : "#eee",
            color: darkMode ? "#fff" : "black",
            border: "1px solid #415d7a",
            padding: "10px",
            borderRadius: "4px",
          }}
        />
      </div>
    </>
  );
}

export default Input;
