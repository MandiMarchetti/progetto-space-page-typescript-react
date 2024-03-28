import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarArticle from "./components/NavBarArticle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FetchComponent from "./components/FetchComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBarArticle />
        <img src="/ilustracion-vector-blanco-negro-astronauta_801978-9592.avif" alt="image" />
        <header className="App-header">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1>Welcome to SPACE TODAY</h1>
                </>
              }
            />

            <Route path="/articles" element={<FetchComponent />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
