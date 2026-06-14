import React from "react";
import { FaStar } from "react-icons/fa";

export default function Starrating({ rating = 0 }) { // Valeur par défaut de 0 pour rating
  return (
    <div style={{ display: "flex", cursor: "pointer" }}>
      {[...Array(5)].map((_, index) => {
        const currentRate = index + 1;
        return (
          <label key={index}>
            <FaStar
              size={20}
              color={currentRate <= rating ? "#ff6060" : "gray"}
            />
          </label>
        );
      })}
    </div>
  );
}
