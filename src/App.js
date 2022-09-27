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
            href="https://github.com/MirNO89/new-react-weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by Miriam MK, hosted on{" "}
          <a
            href="https://amazing-sorbet-18c88b.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
