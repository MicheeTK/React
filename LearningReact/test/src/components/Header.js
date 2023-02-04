import React from "react";
import logo from "../logo.svg";

export default function Header() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Custom Header element</p>
    </div>
  );
}
