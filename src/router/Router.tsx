import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Popular from "../pages/Popular";
import Upcoming from "../pages/Upcoming";
import Latest from "../pages/Latest";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/latest" element={<Latest />} />
    </Routes>
  );
};
