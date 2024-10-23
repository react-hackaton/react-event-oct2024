import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Это приложение на Vite + React</h1>
      <div className="card">
        <p className="read-the-docs">
          Пример базового счетчика. Каждый клик переназначает state на +1
          значение
        </p>
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
