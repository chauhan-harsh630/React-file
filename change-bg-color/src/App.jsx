import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  function updateColor(newColor) {
    setColor(newColor);
  }

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center items-center bottom-12 px-3 inset-x-0">
        <div className="flex flex-wrap justify-center shadow-2xs bg-white p-2 rounded-xl px-2 py-3  gap-3 border-1 border-black-200">
          <button
            className="outline-none px-4 py-2 rounded-2xl"
            style={{ backgroundColor: "Red", color: "white" }}
            onClick={updateColor.bind(this, "Red")}
          >
            Red
          </button>
          <button
            onClick={updateColor.bind(this, "Green")}
            className="outline-none px-4 py-2 rounded-2xl"
            style={{ backgroundColor: "Green", color: "white" }}
          >
            Green
          </button>
          <button
            onClick={updateColor.bind(this, "Blue")}
            className="outline-none px-4 py-2 rounded-2xl"
            style={{ backgroundColor: "Blue", color: "white" }}
          >
            Blue
          </button>
          <button
            onClick={updateColor.bind(this, "Hotpink")}
            className="outline-none px-4 py-2 rounded-2xl"
            style={{ backgroundColor: "Hotpink", color: "white" }}
          >
            Hotpink
          </button>
          <button
            onClick={updateColor.bind(this, "Yellow")}
            className="outline-none px-4 py-2 rounded-2xl"
            style={{ backgroundColor: "Yellow", color: "white" }}
          >
            Yellow
          </button>
          <button
            onClick={updateColor.bind(this, "Lavender")}
            className="outline-none px-4 py-2 rounded-2xl"
            style={{ backgroundColor: "Lavender", color: "black" }}
          >
            Lanvender
          </button>
          <button
            onClick={updateColor.bind(this, "Olive")}
            className="outline-none px-4 py-2 rounded-2xl"
            style={{ backgroundColor: "olive", color: "white" }}
          >
            Olive
          </button>
          <button
            onClick={updateColor.bind(this, "Black")}
            className="outline-none px-4 py-2 rounded-2xl"
            style={{ backgroundColor: "Black", color: "white" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
