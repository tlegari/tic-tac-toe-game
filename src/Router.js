import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import Game from "./Pages/Game/Game";
import Header from "./components/Header/Header";
import { ModalContextProvider } from "./contexts/ModalContext";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <ModalContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/game-on" element={<Game />} />
          </Routes>
        </ModalContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default Router;