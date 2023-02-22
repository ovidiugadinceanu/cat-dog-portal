import React from "react";
import Navbar from "./components/navbar";
import MyImages from "./pages/myImages";
import Upload from "./pages/upload";
import PublicImages from "./pages/publicImages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/my-images" element={<MyImages />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/public-images" element={<PublicImages />} />
      </Routes>
    </div>
  );
}

export default App;
