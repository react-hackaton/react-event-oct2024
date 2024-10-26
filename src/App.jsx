import React from "react";


import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import Personaldata from "./components/Personaldata";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
      <p>Children</p>
      <Personaldata/>
    </Layout>
  );
}

export default App;
