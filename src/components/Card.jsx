import React from "react";

export default function Card({ title, imageUrl, children }) {
  return (
    <div className="card-container">
      {imageUrl && <img src={imageUrl} alt="feature icon" />}
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}
