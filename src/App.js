import React from "react";

import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Oslo" />
        <footer>
          <a
            href="https://github.com/MirNO89/weather-app-shecodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by Miriam MK
        </footer>
      </div>
    </div>
  );
}
