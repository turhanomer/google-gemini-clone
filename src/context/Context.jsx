import { createContext, useEffect, useState } from "react";
import run from "../config/gemini.jsx";

export const Context = createContext();

const ContextProvider = (props) => {

  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPreviousPromts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    
    setResultData("")
    setLoading(true)
    setRecentPrompt(input)
    setShowResult(true)
    const response = await run(input);
    setResultData(response)
    setLoading(false)
    setInput("")
  };

  const contextValue = {
    prevPrompts,
    setPreviousPromts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput
  }

  useEffect(() => {
    onSent("what is react js");
    setShowResult(false);
  }, []); 

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;