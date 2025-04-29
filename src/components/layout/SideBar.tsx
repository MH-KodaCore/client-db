import { NavLink, Outlet } from "react-router-dom";
import { sidebar } from "@/styles";

const Sidebar = () => {
  return (
    <div className={sidebar.wrapper}>
      <div className="text-[#B9B9B9] border-b border-[#637160] cursor-pointer p-4">
        <NavLink
          to="db"
          className={({ isActive }) =>
            isActive ? "text-[#2C8F13]" : "text-[#B9B9B9]"
          }
        >
          DB
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
