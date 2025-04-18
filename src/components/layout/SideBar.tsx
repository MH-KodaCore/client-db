import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-96 h-screen border-r border-r-[rgb(73,73,73)]">
      <div className="flex text-[#B9B9B9] divide-x divide-[rgb(73,73,73)] border-b border-b-[rgb(73,73,73)]">
        <div className="cursor-pointer basis-2/4 text-center p-4">
          <NavLink to="/db">DB</NavLink>
        </div>
        <div className="cursor-pointer basis-2/4 text-center p-4">
          {/* <NavLink to={""}>Connection</NavLink> */}
          connection
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Sidebar;
