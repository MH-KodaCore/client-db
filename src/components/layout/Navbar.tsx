import { NavLink } from "react-router-dom";
import { navbar } from "@/styles";

const Navbar = () => {
  return (
    <div className={navbar.wrapper}>
      <ul className={navbar.lists}>
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
