import { Outlet } from "react-router-dom";
import Main from "../HOME/Main";
import BottomNav from "../components/BottomNav";
import Home from "../components/pages/Home";

function MainLayout({ darkMode, toggleTheme }) {
  return (
    <>
      <Outlet />
      <BottomNav darkMode={darkMode} toggleTheme={toggleTheme} />
    </>
  );
}

export default MainLayout;
