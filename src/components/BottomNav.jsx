import { NavLink } from "react-router-dom";
import {
  FaAssistiveListeningSystems,
  FaHome,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
function BottomNav({ darkMode, toggleTheme }) {
  const navItems = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome size={24} />,
    },
    {
      path: "/product",
      name: "Products",
      icon: <AiOutlineProduct size={24} />,
    },
    {
      path: "/cart",
      name: "Cart",
      icon: <FaShoppingCart size={24} />,
    },
    {
      path: "/about",
      name: "About Us",
      icon: <FaUsers size={24} />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <FaGear size={24} />,
    },
  ];

  return (
    <nav className="sticky bottom-0 left-0 w-full bg-white shadow-md z-1">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center text-sm ${
                isActive
                  ? "text-[#ffc400]"
                  : "text-blue-900 hover:text-amber-500"
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}

        <div className="flex flex-col justify-center py-3 items-center text-blue-900 space-x-2">
          <p>{darkMode ? "🌙 Dark " : "☀️Light"}</p>
          <button
            onClick={toggleTheme}
            className={`relative w-15 h-6 rounded-full transition-colors duration-300 ${
              darkMode ? "bg-blue-900" : "bg-gray-400"
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-lg transition-transform duration-300 ${
                darkMode ? "translate-x-8" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default BottomNav;
