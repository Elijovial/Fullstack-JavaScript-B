import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./components/pages/Home";
import Tips from "./components/pages/Products";
import Products from "./components/pages/Products";
import Carts from "./components/pages/Carts";
// import Messenger from "./pages/Messenger";
// import Cart from "./pages/Cart";
// import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/Products" element={<Products />} />
        {/* <Route path="messenger" element={<Messenger />} /> */}
        <Route path="/cart" element={<Carts />} />
        {/* <Route path="profile" element={<Profile />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
