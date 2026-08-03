import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaRegEye,
  FaRegCommentDots,
  FaShoppingCart,
  FaRegUserCircle,
  FaUsers,
} from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";

function BottomNav() {
  const navItems = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome size={24} />,
    },
    {
      path: "/Products",
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
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-md">
      <div className="flex justify-around items-center py-2">

        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center text-sm ${
                isActive
                  ? "text-[#ffc400] "
                  : "text-blue-900 hover:text-amber-500 hover:border-b"
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}

      </div>
    </nav>
  );
}

export default BottomNav;