import React from "react";
import "../Detail.css";

export default function Tiles(props) {
  // Props
  const { title, items } = props;

  return (
    title &&
    items && (
      <div className="hero-banner-black">
        <h2>{title}</h2>
        <ul className="tilesWrap">
          {items.items.slice(0, 4).map((item, index) => (
            <li key={item.resourceURI}>
              <h2>{index + 1}</h2>
              <h3>{item.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
