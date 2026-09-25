import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";

import Membros from "./pages/Membros";
import Projetos from "./pages/Projetos";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/membros" element={<Membros />} />
        <Route path="/projetos" element={<Projetos />} />
      </Route>
    </Routes>
  );
}
