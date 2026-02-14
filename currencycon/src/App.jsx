import { useEffect, useState } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [result, setResult] = useState(null);
  const [currencies, setCurrencies] = useState({});
  const [rates, setRates] = useState({});
  const [openDropdown, setOpenDropdown] = useState(null);

  // Fetch all currency names
  useEffect(() => {
    async function fetchCurrencies() {
      const res = await fetch(
        "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
      );
      const data = await res.json();
      setCurrencies(data);
    }
    fetchCurrencies();
  }, []);

  // Fetch rates when fromCurrency changes
  useEffect(() => {
    async function fetchRates() {
      const res = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`
      );
      const data = await res.json();
      setRates(data[fromCurrency]);
    }
    fetchRates();
  }, [fromCurrency]);

  const convert = () => {
    if (!rates[toCurrency]) return;
    const converted = amount * rates[toCurrency];
    setResult(converted.toFixed(2));
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult(null);
  };

  const renderDropdown = (selected, setSelected, type) => (
    <div className="relative w-full">
      <div
        onClick={() => setOpenDropdown(openDropdown === type ? null : type)}
        className="bg-white/30 backdrop-blur-md border border-white/40 px-4 py-3 rounded-xl text-white cursor-pointer flex justify-between items-center hover:bg-white/40 transition"
      >
        {selected.toUpperCase()}
        <span className={`transition ${openDropdown === type ? "rotate-180" : ""}`}>
          ▼
        </span>
      </div>

      {openDropdown === type && (
        <div className="absolute mt-2 w-full max-h-60 overflow-y-auto bg-white text-black rounded-xl shadow-2xl z-50">
          {Object.keys(currencies).map((cur) => (
            <div
              key={cur}
              onClick={() => {
                setSelected(cur);
                setOpenDropdown(null);
              }}
              className="px-4 py-2 hover:bg-indigo-500 hover:text-white cursor-pointer transition"
            >
              {cur.toUpperCase()}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">

      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl p-8 w-full max-w-md text-white">

        <h1 className="text-3xl font-bold text-center mb-6">
          Currency Converter
        </h1>

        {/* Amount */}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full mb-6 px-4 py-3 rounded-xl bg-white/30 text-white outline-none focus:ring-2 focus:ring-white transition"
        />

        {/* From Currency */}
        <div className="mb-4">
          <p className="mb-2 text-sm">From</p>
          {renderDropdown(fromCurrency, setFromCurrency, "from")}
        </div>

        {/* Swap Button */}
        <div className="flex justify-center my-4">
          <button
            onClick={swapCurrencies}
            className="bg-white text-indigo-600 px-4 py-2 rounded-full shadow-lg hover:bg-indigo-100 transition"
          >
            ⇅
          </button>
        </div>

        {/* To Currency */}
        <div className="mb-6">
          <p className="mb-2 text-sm">To</p>
          {renderDropdown(toCurrency, setToCurrency, "to")}
        </div>

        {/* Convert Button */}
        <button
          onClick={convert}
          className="w-full bg-white text-indigo-600 font-semibold py-3 rounded-xl hover:bg-indigo-100 transition shadow-lg"
        >
          Convert
        </button>

        {/* Result */}
        {result && (
          <div className="mt-6 text-center bg-white/30 rounded-xl p-4">
            <p className="text-lg">Converted Amount</p>
            <p className="text-2xl font-bold mt-2">
              {result} {toCurrency.toUpperCase()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
