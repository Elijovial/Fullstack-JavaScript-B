import { Outlet } from "react-router-dom";
import Main from "../HOME/Main";
import BottomNav from "../components/BottomNav";
import About from "../About/About";

function MainLayout({ darkMode, toggleTheme }) {
  return (
    <>
      
      <Main darkMode={darkMode} toggleTheme={toggleTheme} />
      

      <Outlet />
      <BottomNav
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />
    </>
  );
}

export default MainLayout;