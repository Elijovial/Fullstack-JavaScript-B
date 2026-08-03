import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNav";

function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-300 pb-20">
      <Outlet />

      <BottomNav />
    </div>
  );
}

export default MainLayout;