import React from "./react-dev.js";
import ReactDOM from "./react-dom-dev.js";
import "https://unpkg.com/babel-standalone@6/babel.min.js";
import App from "../components/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('reactRoot')
);
