import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/SideBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="h-full">
        <Header />
        <Navbar />
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
