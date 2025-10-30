import React, { useState } from "react";

export default function MiniCalculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = (operator) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Please enter valid numbers");
      return;
    }

    switch (operator) {
      case "+":
        setResult(n1 + n2);
        break;
      case "-":
        setResult(n1 - n2);
        break;
      case "×":
        setResult(n1 * n2);
        break;
      case "÷":
        setResult(n2 !== 0 ? n1 / n2 : "Cannot divide by 0");
        break;
      default:
        setResult("Invalid Operation");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Mini Calculator</h2>

        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="w-full border rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="w-full border rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex justify-between mb-4">
          {["+", "-", "×", "÷"].map((op) => (
            <button
              key={op}
              onClick={() => handleCalculate(op)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              {op}
            </button>
          ))}
        </div>

        {result !== null && (
          <div className="text-center text-lg font-semibold">
            Result: <span className="text-blue-600">{result}</span>
          </div>
        )}
      </div>
    </div>
  );
}
