import { NavLink } from "react-router-dom";
import { sidebar } from "@/styles";

const Sidebar = () => {
  return (
    <div className={sidebar.wrapper}>
      <div className="flex text-[#B9B9B9] divide-x divide-[#637160] border-b border-[#637160]">
        <div className="cursor-pointer basis-2/4 text-center p-4">
          <NavLink to="/db" className="active:text-amber-200">
            DB
          </NavLink>
        </div>
        <div className="cursor-pointer basis-2/4 text-center p-4">
          <NavLink to="/connection">Connection</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
