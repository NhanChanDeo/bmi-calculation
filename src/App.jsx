// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <button>Click Me</button>
//     </div>
//   );
// }

import React, { useState } from "react";
import "./styles.css";

const BMICalculator = () => {
  // State for inputs
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  // State for results
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("");

  const [weightError, setWeightError] = useState(false);
  const [heightError, setHeightError] = useState(false);

  const inputValidation = (value) => {
    // Allow only numbers and a single decimal point
    if (value === "") {
      return true;
    }
    return /^\d*\.?\d*$/.test(value) && value !== ".";
    //test for empty string or valid number with optional decimal point
  };

  const handleWeightChange = (e) => {
    const val = e.target.value;
    setWeight(val);
    setWeightError(!inputValidation(val));
  };

  const handleHeightChange = (e) => {
    const val = e.target.value;
    setHeight(val);
    setHeightError(!inputValidation(val));
  };
  
  const calculateBMI = (e) => {
    e.preventDefault();

    if (weight > 0 && height > 0) {
      // Formula: weight / (height * height)
      const bmiValue = (weight / (height * height)).toFixed(1);
      setBmi(bmiValue);

      // Evaluation Logic
      if (bmiValue < 18.5) {
        setMessage("Underweight");
        setCategory("underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage("Normal weight");
        setCategory("healthy");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage("Overweight");
        setCategory("overweight");
      } else {
        setMessage("Obese");
        setCategory("obese");
      }
    } else {
      alert("Please enter valid values for weight and height");
    }
  };


  

  return (
    <div className="container">
      <h1 className="title">BMI Calculator</h1>

      {/* Left Side */}
      <div className="left-pane">
        <form onSubmit={calculateBMI} className="bmi-form">
          <div className="input-group">
            <label>Input weight (kg):</label>
            <input
              type="text"
              //step="0.01"
              value={weight}
              onChange={handleWeightChange}
              className="bmi-input"
              placeholder="eg. 70"
            />
            {weightError && <span className="error-message">Invalid input</span>}
          </div>
          <div className="input-group">
            <label>Input height (m):</label>
            <input
              type="text"
              //step="0.01"
              value={height}
              onChange={handleHeightChange}
              className="bmi-input"
              placeholder="eg. 1.7"
            />
            {heightError && <span className="error-message">Invalid input</span>}
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>

      {/* Right Side */}

      {/* <div className="right-pane">
        {bmi ? (
          <div className="result-display">
            <h3>Your BMI:</h3>
            <p className="bmi-number">{bmi}</p>
            <p className="bmi-message">{message}</p>
          </div>
        ) : (
          <p className="placeholder-text">
            Enter your details to see the result.
          </p>
        )}
      </div> */}
      <div className={`right-pane ${category ? `bg-${category}` : ""}`}>
        {bmi ? (
          <div className="result-display">
            <h3>Your BMI:</h3>
            {/* Update the number to change text color */}
            <p className={`bmi-number ${category}`}>{bmi}</p>
            <p className={`bmi-message ${category}`}>{message}</p>
          </div>
        ) : (
          <p className="placeholder-text">
            Enter your details to see the result.
          </p>
        )}
      </div>
    </div>
  );
};

// Simple inline styles for the layout
// const styles = {
//   container: {
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     gap: "20px",
//     maxWidth: "600px",
//     margin: "50px auto",
//     padding: "20px",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     fontFamily: "Arial, sans-serif",
//   },
//   leftPane: {
//     padding: "20px",
//     borderRight: "1px solid #eee",
//   },
//   rightPane: {
//     padding: "20px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#f9f9f9",
//     borderRadius: "8px",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   inputGroup: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "5px",
//   },
//   input: {
//     padding: "8px",
//     borderRadius: "4px",
//     border: "1px solid #ccc",
//   },
//   button: {
//     padding: "10px",
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
//   resultDisplay: {
//     textAlign: "center",
//   },
//   bmiNumber: {
//     fontSize: "48px",
//     fontWeight: "bold",
//     margin: "10px 0",
//     color: "#007bff",
//   },
//   bmiMessage: {
//     fontSize: "20px",
//     color: "#555",
//   },
//   placeholder: {
//     color: "#888",
//     fontStyle: "italic",
//   },
// };

export default BMICalculator;