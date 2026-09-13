import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { LanguageProvider } from "../context/LanguageContext";
import MatrixBackground from "./MatrixBackground";

export default function Layout() {
  return (
    <LanguageProvider>
    <MatrixBackground />
      <Navbar />
      <Outlet />
    </LanguageProvider>
  );
}
