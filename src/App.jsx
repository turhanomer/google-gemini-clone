import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Input from "./components/Input";
import Sidebar from "./components/Sidebar";
import Mode from "./DarkMode/Mode";
import ThemeProvider from "./components/ThemeContext";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  return (
    <ThemeProvider>
      <Mode />
      <Input />
      <Sidebar />
      <div className="main-container">
        {!showResult ? 
          <>
            <h3
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "bold",
                letterSpacing: "2px",
                paddingTop: "100px",
                transformOrigin: "center",
                animation: "slideInAndGrow 0.5s ease-out forwards",
              }}
            >
              Hello,
            </h3>
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "36px",
                fontWeight: "lighter",
                letterSpacing: "1px",
                transformOrigin: "center",
                animation: "slideInAndGrow 0.6s ease-out forwards",
              }}
            >
              How can I help you today?
            </h2>
            </>
         : 
          <div></div>
        }
      </div>
    </ThemeProvider>
  );
}

export default App;

