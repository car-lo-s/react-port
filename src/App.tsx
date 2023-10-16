import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from "./components/header";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./rotas/home";
import { Sobre } from "./rotas/sobre";
import { Projeto } from "./rotas/projeto";
import { Contato } from "./rotas/contato";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HashRouter> */}
      <Routes>
        <Route path="/react-port" element={<Home />} />
        <Route path="/react-port/sobre" element={<Sobre />} />
        <Route path="/react-port/projeto" element={<Projeto />} />
        <Route path="/react-port/contato" element={<Contato />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {/* </HashRouter> */}
    </div>
  );
}

export default App;
