const Navbar = () => {
  return (
    <div className=" border-y  border-y-[rgb(73,73,73)]">
      <ul className="flex  flex-row justify-around text-[#B9B9B9] m-4">
        <li>
          <p className="cursor-pointer">File</p>
        </li>
        <li>
          <p className="cursor-pointer">Edit</p>
        </li>
        <li>
          <p className="cursor-pointer">Database</p>
        </li>
        <li>
          <p className="cursor-pointer">Table</p>
        </li>
        <li>
          <p className="cursor-pointer">View</p>
        </li>
        <li>
          <p className="cursor-pointer">Window</p>
        </li>
        <li>
          <p className="cursor-pointer">Help</p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
