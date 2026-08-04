import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { useState } from "react";
import Main from "./HOME/Main";
import Product from "./component/Product";


import Home from "./components/pages/Home";

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
          <Route path="/" element={<MainLayout darkMode={darkMode} toggleTheme={toggleTheme} />}>
            <Route index element={<Main darkMode={darkMode} toggleTheme={toggleTheme} />} />
            <Route path="/About" element={<About darkMode={darkMode} toggleTheme={toggleTheme} />} />
            <Route path="/Product" element={<Product darkMode={darkMode} toggleTheme={toggleTheme} />} />
          </Route>
      </Routes> 
    </div>
  );
}

export default App;
