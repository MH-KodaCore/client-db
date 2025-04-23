import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-96 h-[82%] border-r border-r-[#363636]">
      <div className="flex text-[#B9B9B9] divide-x divide-[#363636] border-b border-b-[#363636]">
        <div className="cursor-pointer basis-2/4 text-center p-4">
          <NavLink to="/db" className="active:text-amber-200">
            DB
          </NavLink>
        </div>
        <div className="cursor-pointer basis-2/4 text-center p-4">
          <NavLink to="/connection">Connection</NavLink>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Sidebar;
