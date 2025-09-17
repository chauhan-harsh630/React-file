import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#FF0000");

  function updateColor() {
    const hexDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let col = "#";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * hexDigits.length);
      col += hexDigits[index];
    }
    setColor(col);
  }

  return (
    <div style={{ backgroundColor: color, height: "100vh", textAlign: "center" }}>
      <h1>Background Color: {color}</h1>
      <button onClick={updateColor}>Change Color</button>
    </div>
  );
}

export default App;
