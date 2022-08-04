import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import DataPersonal from "./pages/DataPersonal/DataPersonal";
import FormSubmission from "./pages/FormSubmission/FormSubmission";
import Home from "./pages/Home/Home";
import Keahlian from "./pages/Keahlian/Keahlian";
import PengalamanKerja from "./pages/PengalamanKerja/PengalamanKerja";
import RiwayatPendidikan from "./pages/RiwayatPendidikan/RiwayatPendidikan";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tambah" element={<FormSubmission />}>
          <Route path="pendidikan" element={<RiwayatPendidikan />} />
          <Route path="keahlian" element={<Keahlian />} />
          <Route path="kerja" element={<PengalamanKerja />} />
          <Route path="datapersonal" element={<DataPersonal />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
