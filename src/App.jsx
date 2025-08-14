import React, { useState } from "react";
import WeightForm from "./WeightForm";
import DietChart from "./DietChart";
import "./App.css";

export default function App() {
  const [weight, setWeight] = useState(null);
  const [preference, setPreference] = useState("");

  return (
    <div className="container">
      <h1>Personalized Diet Chart</h1>
      <WeightForm setWeight={setWeight} setPreference={setPreference} />
      {weight && preference && (
        <DietChart weight={weight} preference={preference} />
      )}
    </div>
  );
}
