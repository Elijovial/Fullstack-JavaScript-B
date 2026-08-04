import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNav";

function MainLayout({ darkMode, toggleTheme }) {
  return (
    <>
      <Outlet />

      <BottomNav
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />
    </>
  );
}

export default MainLayout;