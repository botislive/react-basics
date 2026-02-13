import React from "react";
import { useState, useCallback, useEffect, useRef } from "react";

const Pass = () => {
  const [length, setLength] = useState(12);
  const [numberallowed, setNumberallowed] = useState(true);
  const [charallowed, setCharallowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberallowed) str += "0123456789";
    if (charallowed) str += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(pass);
  }, [length, numberallowed, charallowed]);

  useEffect(() => {
    passwordgenerator();
  }, [length, numberallowed, charallowed, passwordgenerator]);

  const copytoclip = async () => {
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-6">

      <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8 w-full max-w-md text-white">

        <h1 className="text-3xl font-bold text-center mb-6 tracking-wide">
          🔐 Password Generator
        </h1>

        {/* Password Field */}
        <div className="flex items-center bg-white/20 rounded-xl overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-1 bg-transparent px-4 py-3 outline-none text-lg placeholder-white/70"
          />
          <button
            onClick={copytoclip}
            className="bg-white text-indigo-600 font-semibold px-4 py-3 hover:bg-gray-200 transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Length Slider */}
        <div className="mb-6">
          <label className="flex justify-between mb-2 font-medium">
            <span>Password Length</span>
            <span>{length}</span>
          </label>
          <input
            type="range"
            min={6}
            max={32}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-pink-400 cursor-pointer"
          />
        </div>

        {/* Toggles */}
        <div className="space-y-4">

          {/* Numbers Toggle */}
          <div className="flex justify-between items-center">
            <span>Include Numbers</span>
            <button
              onClick={() => setNumberallowed(!numberallowed)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                numberallowed ? "bg-green-400" : "bg-gray-400"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                  numberallowed ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>

          {/* Characters Toggle */}
          <div className="flex justify-between items-center">
            <span>Include Symbols</span>
            <button
              onClick={() => setCharallowed(!charallowed)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                charallowed ? "bg-green-400" : "bg-gray-400"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                  charallowed ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>

        </div>

        {/* Generate Button */}
        <button
          onClick={passwordgenerator}
          className="w-full mt-8 bg-white text-indigo-600 font-bold py-3 rounded-xl hover:bg-gray-200 transition text-lg"
        >
          Generate Password
        </button>

      </div>
    </div>
  );
};

export default Pass;
