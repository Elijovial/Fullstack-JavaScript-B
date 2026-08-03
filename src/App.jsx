import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Carts from "./components/pages/Carts";
import About from "./About/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Carts />} />
        <Route path="profile" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;



