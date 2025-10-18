import { useState , useEffect} from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => setInput(input + value);
  

  const handleClear = () => setInput("");

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;

      if (!isNaN(key) || key === ".") {
        handleClick(key);

      } else if(["+", "-", "*", "/"].includes(key)) {
        handleClick(key);
      } else if(key === "Enter") {
        handleCalculate();
      } else if (key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (key === "Escape") {
        handleClear();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);

    };
},[input])
  return (
    <div className="box">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        <button className="operator clear" onClick={handleClear}>C</button>
        <button className="operator" onClick={() => handleClick("/")}>/</button>
        <button className="operator" onClick={() => handleClick("*")}>*</button>
        <button className="operator" onClick={() => handleClick("-")}>-</button>

        {[7, 8, 9].map((n) => (
          <button key={n} onClick={() => handleClick(n)}>
            {n}
          </button>
        ))}
        <button className="operator" onClick={() => handleClick("+")}>+</button>

        {[4, 5, 6].map((n) => (
          <button key={n} onClick={() => handleClick(n)}>
            {n}
          </button>
        ))}
        
        <button onClick={() => handleClick(".")} className="operator">.</button>

        {[1, 2, 3].map((n) => (
          <button key={n} onClick={() => handleClick(n)}>
            {n}
          </button>
        ))}
        
        <button className="equal" onClick={handleCalculate}>Enter</button>
        <button onClick={() => handleClick("0")} className="zero">0</button>
      </div>
    </div>
  );
}

export default App;
