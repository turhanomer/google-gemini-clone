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
            style={{
              width: "10rem",
              backgroundColor: darkMode ? "#415d7a" : "#eee",
              color: darkMode ? "#fff" : "black",
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
            style={{
              width: "10rem",
              backgroundColor: darkMode ? "#415d7a" : "#eee",
              color: darkMode ? "#fff" : "black",
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
            style={{
              width: "10rem",
              backgroundColor: darkMode ? "#415d7a" : "#eee",
              color: darkMode ? "#fff" : "black",
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
            borderRadius: "14px",
          }}
        />
        <svg
          style={{
            position: "relative",
            right: "30px",
            backgroundColor: darkMode ? "#415d7a" : "#eee",
            color: darkMode ? "#fff" : "black",
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-send"
          viewBox="0 0 16 16"
        >
          <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
        </svg>
      </div>
    </>
  );
}

export default Input;
