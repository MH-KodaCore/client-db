import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" border h-[8%] border-y-[#363636]">
      <ul className="flex flex-row justify-around items-center text-[#B9B9B9] h-full">
        <li>
          <NavLink to="File" className="cursor-pointer">
            File
          </NavLink>
        </li>
        <li>
          <NavLink to="Edit" className="cursor-pointer">
            Edit
          </NavLink>
        </li>
        <li>
          <NavLink to="Database" className="cursor-pointer">
            Database
          </NavLink>
        </li>
        <li>
          <NavLink to="Table" className="cursor-pointer">
            Table
          </NavLink>
        </li>
        <li>
          <NavLink to="View" className="cursor-pointer">
            View
          </NavLink>
        </li>
        <li>
          <NavLink to="Window" className="cursor-pointer">
            Window
          </NavLink>
        </li>
        <li>
          <NavLink to="Help" className="cursor-pointer">
            Help
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
