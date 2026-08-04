// import React from "react";
// import { Cart } from "./Cart/cart";
// import Product from "./component/Product";

// const App = () => {
//   return (
//     <div>
//       <Cart cartItems={cartItems} />
//       <Product />
//     </div>
//   );
// };

// export default App;
import { useState } from "react";

import Product from "./component/Product";
import { Cart } from "./Cart/cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Product cartItems={cartItems} setCartItems={setCartItems} />
      <Cart cartItems={cartItems} />
    </>
  );
}

export default App;
