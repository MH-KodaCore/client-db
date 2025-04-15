import LeftScreen from "./layout/SideBar";
import RightScreen from "./RightScreen";

const FullScreen = () => {
  return (
    <div className="flex w-full h-screen text-[#B9B9B9]">
      <div className="basis-1/4 border-r border-[rgb(73,73,73)]">
        <LeftScreen />
      </div>
      <div className="basis-3/4">
        <RightScreen />
      </div>
    </div>
  );
};

export default FullScreen;
