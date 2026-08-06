import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { useState } from "react";
import Main from "./HOME/Main";
import Product from "./component/Product";
import Settings from "./Settings/Setting";

import Cart from "./Cart/Cart";
import Home from "./components/pages/Home";


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
            <Route path="/Cart" element={<Cart darkMode={darkMode} toggleTheme={toggleTheme} />} />
            <Route path="/Settings" element={<Settings darkMode={darkMode} toggleTheme={toggleTheme} />} />
          </Route>
      </Routes> 
    </div>
  );
};

export default App;
