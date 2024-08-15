import { useEffect, useContext, useState, createContext } from "react";
import "../App.css";
import "../DarkMode/Mode.css";
import { useTheme } from "./ThemeContext";
import { Context } from "../context/Context";

function Input() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSent();
    }
  }

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
      {!showResult ? (
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
        </>
      ) : (
        <div style={{ color: darkMode ? "white" : "black" }} id="main">
          <div style={{display: "flex", flexDirection:"row"}} className="result-title">
            <svg
              style={{float: "left", backgroundColor: darkMode ? "#415d7a" : "white", borderRadius: "5px", position: "relative", bottom: "6px"}}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            <p>{recentPrompt}</p>
          </div>
          <hr />
          <div className="result-data">
            <svg
            style={{float: "left", backgroundColor: darkMode ? "#415d7a" : "white", borderRadius: "11px", position: "relative", bottom: "6px", right: "55px",zIndex:"1", width: "35px"}}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-robot"
              viewBox="0 0 16 16"
            >
              <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
              <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
            </svg>
            {
              loading ? 
              <div className="loader">
                <hr />
                <hr />
                <hr />
              </div> :
              <p dangerouslySetInnerHTML={{ __html: resultData }}></p> 
            }
          </div>
        </div>
      )}
      <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
        <div
          id="inputId"
          className="input-group position-absolute w-50 start-50 translate-middle"
        >
          <input
            onKeyDown={handleKeyDown}
            onChange={(e) => setInput(e.target.value)}
            value={input}
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
              zIndex: "1",
              width: "80%",
            }}
          />
          <svg
            onClick={() => onSent()}
            style={{
              position: "relative",
              right: "30px",
              backgroundColor: darkMode ? "#415d7a" : "#eee",
              color: darkMode ? "#fff" : "black",
              zIndex: "2",
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
      </div>
    </>
  );
}

export default Input;
