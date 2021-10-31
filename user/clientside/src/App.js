import React from "react";
import {HashRouter} from "react-router-dom";
import AppRoute from "./router/AppRoute";


function App() {
  return (
    <HashRouter>
        <AppRoute/>
    </HashRouter>
  );
}

export default App;
