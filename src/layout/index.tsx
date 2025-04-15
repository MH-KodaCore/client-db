import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import SideBar from "../components/layout/SideBar";

const MainLayout = () => {
  return (
    <>
      <div>
        <Header />
        <Navbar />
        <SideBar />
      </div>
    </>
  );
};

export default MainLayout;
