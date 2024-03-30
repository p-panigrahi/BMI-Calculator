import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const handelBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      // Logic for message

      if (bmi < 25) {
        setMessage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h1>BMI CALCULATOR</h1>
        <form onSubmit={handelBmi}>
          <div className="weight">
            <label htmlFor="name">Weight (ibs)</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Weight"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="height">
            <label htmlFor="name">Height</label>
            <br />
            <input
              type="text"
              placeholder="Enter Your Height"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Calculate BMI
            </button>
            <button className="btnReload" type="submit" onClick={reload}>
              Reload
            </button>
          </div>
          <div className="message">
            <h3>Your BMI IS :{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
