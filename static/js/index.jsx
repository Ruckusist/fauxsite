/*

Index.jsx
Entry Point for the babel-webpack construction.

import all contructed modules into this main form.

*/

import React from "react";
import ReactDOM from "react-dom";

// SITE MODULES
import App from "./App"; // main test

ReactDOM.render(<App />, document.getElementById("content"));