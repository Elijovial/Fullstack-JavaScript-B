import { Cart } from "../../Cart/cart";

function Carts({ darkMode, toggleTheme }) {
  return (
    <div className="p-6">
      <Cart darkMode={darkMode} />
    </div>
  );
}

export default Carts;
