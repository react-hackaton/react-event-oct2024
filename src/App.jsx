import React, { useState } from "react";

import "./App.css";
import Button from "@mui/material/Button";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0);

  const showToast = () => {
    toast(`Button clicked ${count + 1} times!`);
  };

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
          onClick={() => {
            setCount((prev) => prev + 1);
            showToast();
          }}
        >
          count is {count}
        </Button>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}

export default App;
