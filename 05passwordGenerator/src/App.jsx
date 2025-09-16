import React, { useState, useCallback, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8); // 👈 slider value state me
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeChar, setIncludeChar] = useState(true);

  const copyPassword = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (includeNumber) str += "0123456789";
    if (includeChar) str += "~!@#$%^&*()_+{}|:<>?''``";

    for (let i = 1; i <= length; i++) {
      let letter = Math.floor(Math.random() * str.length);
      pass += str.charAt(letter);
    }

    setPassword(pass);
  }, [length, includeNumber, includeChar]);

  const copyPassToClipboard = () => {
    if (password.length > 0) {
      copyPassword.current?.select();
      window.navigator.clipboard.writeText(password);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 border border-red-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white text-black rounded-md"
          placeholder="Password"
          ref={copyPassword}
          readOnly
        />
        <button
          onClick={copyPassToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-4 my-5 items-center">
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength((e.target.value))}
            className="cursor-pointer"
          />
          <label className="text-white">Length : {length}</label> 
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={includeChar}
            onChange={() => setIncludeChar((prev) => !prev)}
          />
          <label className="text-white">Character</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={includeNumber}
            onChange={() => setIncludeNumber((prev) => !prev)}
          />
          <label className="text-white">Number</label>
        </div>
      </div>

      <div className="flex justify-center text-sm gap-x-2 my-5">
        <button
          onClick={passwordGenerator}
          className="bg-blue-600 px-3 py-2 rounded text-white"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
