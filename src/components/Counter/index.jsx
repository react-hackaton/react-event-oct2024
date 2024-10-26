import React, { useState } from "react";

import Button from "@mui/material/Button";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Counter() {
  const [count, setCount] = useState(0);

  const showToast = () => {
    toast(`🦄 Button clicked ${count + 1} times!`);
  };

  return (
    <>
      <div className="card">
        <p className="read-the-docs">Каждый клик добавляет +1 к значению</p>
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
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}
