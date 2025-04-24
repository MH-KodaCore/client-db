import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/layout";
// import MainLayout from "";
import DataBasa from "@/pages/DataBasa";
import Login from "@/components/login";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="connection" element={<MainLayout />} />
          <Route path="db" element={<DataBasa />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
