import React, { useState } from "react";

export default function WeightForm({ setWeight, setPreference }) {
  const [inputWeight, setInputWeight] = useState("");
  const [inputPref, setInputPref] = useState("Veg");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputWeight > 0) {
      setWeight(Number(inputWeight));
      setPreference(inputPref);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="weight-form">
      <label>Enter your weight (kg):</label>
      <input
        type="number"
        value={inputWeight}
        onChange={(e) => setInputWeight(e.target.value)}
        placeholder="e.g. 70"
      />

      <label>Food Preference:</label>
      <select
        value={inputPref}
        onChange={(e) => setInputPref(e.target.value)}
      >
        <option value="Veg">Veg</option>
        <option value="Non-Veg">Non-Veg</option>
      </select>

      <button type="submit">Get Diet Chart</button>
    </form>
  );
}
