import React from "react";

import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { Counter } from "./components/Counter";

function App() {
  return (
    <>
      <h1>Это приложение на Vite + React + MUI</h1>
      <Counter />
    </>
  );
}

export default App;
