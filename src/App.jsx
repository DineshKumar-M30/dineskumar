import React, { useState } from "react";

export default function RandomNumberGenerator() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandom = () => {
    const minVal = parseInt(min);
    const maxVal = parseInt(max);
    if (minVal >= maxVal) {
      alert("⚠️ Max value must be greater than Min value!");
      return;
    }
    const random = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    setRandomNumber(random);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎲 Random Number Generator</h1>

      <div style={styles.inputContainer}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Min:</label>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Max:</label>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            style={styles.input}
          />
        </div>
      </div>

      <button style={styles.button} onClick={generateRandom}>
        Generate
      </button>

      {randomNumber !== null && (
        <div style={styles.resultBox}>
          <h2 style={styles.resultText}>{randomNumber}</h2>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Poppins, sans-serif",
    background: "linear-gradient(135deg, #007BFF, #00A8FF)", // 💙 Blue gradient background
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    padding: "20px",
  },
  title: {
    fontSize: "2em",
    marginBottom: "20px",
  },
  inputContainer: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "500",
  },
  input: {
    width: "80px",
    padding: "8px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1em",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#fff",
    color: "#007BFF",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1em",
    fontWeight: "600",
    transition: "all 0.3s",
  },
  resultBox: {
    marginTop: "25px",
    padding: "20px 40px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  },
  resultText: {
    fontSize: "2em",
    color: "#007BFF",
    margin: 0,
  },
};
