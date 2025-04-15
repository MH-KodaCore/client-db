import "./App.css";
import FullScreen from "./components/FullScreen";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-[#0F0F0F] h-screen">
        <Header/> 
        <Navbar/>  
        <FullScreen/>     
      </div>
    </>
  );
}

export default App;
