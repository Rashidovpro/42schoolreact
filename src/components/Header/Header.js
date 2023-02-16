import React from "react";
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header-inner container">
        <h2 className="header-inner__title">
          Welcome, <span className="username">Abdulloh!</span>
        </h2>
        <p>lorem</p>
      </div>
    </div>
  );
}
