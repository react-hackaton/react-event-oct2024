import React, { useState } from "react";

import "./App.css";
import Button from "@mui/material/Button";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Personaldata from "./Personaldata";

function App() {
  const [count, setCount] = useState(0);

  const showToast = () => {
    toast(`🦄 Button clicked ${count + 1} times!`);
  };

  return (
    <>
      
      <div className="card">
        
        
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
      <Personaldata/>
    </>
  );
}

export default App;
