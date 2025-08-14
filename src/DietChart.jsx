import React from "react";

export default function DietChart({ weight, preference }) {
  let chart = [];

  if (preference === "Veg") {
    if (weight < 50) {
      chart = [
        "Breakfast: Oatmeal with fruits",
        "Lunch: Rice, lentils, and vegetables",
        "Dinner: Chapati with paneer and salad"
      ];
    } else if (weight <= 70) {
      chart = [
        "Breakfast: Vegetable upma",
        "Lunch: Brown rice, dal, and vegetables",
        "Dinner: Quinoa with dal and salad"
      ];
    } else {
      chart = [
        "Breakfast: Green smoothie & nuts",
        "Lunch: Large salad with beans",
        "Dinner: Soup with vegetables & whole wheat bread"
      ];
    }
  } else {
    if (weight < 50) {
      chart = [
        "Breakfast: Boiled eggs & toast",
        "Lunch: Rice, chicken, and vegetables",
        "Dinner: Chapati with chicken curry and salad"
      ];
    } else if (weight <= 70) {
      chart = [
        "Breakfast: Eggs & whole wheat bread",
        "Lunch: Brown rice, chicken, vegetables",
        "Dinner: Grilled fish with salad"
      ];
    } else {
      chart = [
        "Breakfast: Protein shake & nuts",
        "Lunch: Salad with grilled chicken",
        "Dinner: Soup with chicken & whole wheat bread"
      ];
    }
  }

  return (
    <div className="diet-container">
      <h2>Your Diet Chart</h2>
      <ul>
        {chart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
