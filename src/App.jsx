import React, { useState } from "react";

import "./App.css";
import Button from "@mui/material/Button";

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

        <Button
          variant="contained"
          onClick={() => setCount((prev) => prev + 1)}
        >
          count is {count}
        </Button>
      </div>
    </>
  );
}

export default App;
