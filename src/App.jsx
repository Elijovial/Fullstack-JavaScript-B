import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { useState } from "react";

import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Carts from "./components/pages/Carts";
import About from "./About/About";
import BottomNav from "./components/BottomNav";

function App() {
  
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Routes>
        <Route
          path="/"
          element={<MainLayout darkMode={darkMode} toggleTheme={toggleTheme} />}
        >
          <Route
            index
            element={<Home darkMode={darkMode} toggleTheme={toggleTheme} />}
          />
          <Route
            path="products"
            element={<Products darkMode={darkMode} toggleTheme={toggleTheme} />}
          />
          <Route
            path="cart"
            element={<Carts darkMode={darkMode} toggleTheme={toggleTheme} />}
          />
          <Route
            path="about"
            element={<About darkMode={darkMode} toggleTheme={toggleTheme} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
