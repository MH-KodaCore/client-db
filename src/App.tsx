import "./App.css";
import FullScreen from "./components/FullScreen";
import Header from "./components/Header";
import Navbar from "./components/layout/Navbar";
import MainLayout from "./layout";

function App() {
  return (
    <>
      <div className="bg-[#0F0F0F] h-screen">
        <MainLayout />
        {/* <Header />
        <Navbar />
        <FullScreen /> */}
      </div>
    </>
  );
}

export default App;
