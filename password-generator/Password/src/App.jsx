import { useState, useCallback,useEffect,useRef} from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)
  const generatorPassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, charAllowed, numAllowed]);

  const copyClipBord = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
    setcopy(true)
    setTimeout(()=>setcopy(false),1500)
   },[password])

  useEffect(() => {
    generatorPassword();
  }, [length, charAllowed, numAllowed, generatorPassword]);
  return (
    <>
      
      <div className="w-full max-w-md mx-auto shadow-md px-4 py-8 rounded-lg my-8 text-yellow-600 bg-gray-800"
      >
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={password}
            className="outline-none w-full py-1 px-4 bg-white"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button className="bg-blue-500 p-2 text-white hover:bg-blue-700 after:scale-1 "
          onClick={copyClipBord}
          >
            cpoy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
              min={6}
              max={16}
              value={length}
              className="cursor-pointer"
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label htmlFor="length">Length: {length}</label>

          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              checked={numAllowed}
              className="cursor-pointer"
              onChange={() => {
                setNumAllowed((prev) => !prev)}}
            />
            <label htmlFor="num">Number </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={charAllowed}
              className="cursor-pointer"
              onChange={()=>setCharAllowed((c)=>!c)}
            />
            <label htmlFor="char">Charactor</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
