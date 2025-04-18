import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "layout";
import DataBasa from "pages/DataBasa";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* <Route path="/connection" element={<L}/> */}
            <Route path="db" element={<DataBasa />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
