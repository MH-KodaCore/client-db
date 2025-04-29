import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/layout";
import DataBasa from "@/pages/DataBasa";
import Login from "@/components/login";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="dashboard" element={<MainLayout />}>
            <Route path="db" element={<DataBasa />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
