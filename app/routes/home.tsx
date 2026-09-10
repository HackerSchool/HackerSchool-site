import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import IntroMatrix from "../components/IntroMatrix"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Home() {
  return (
    <>
      <IntroMatrix />
      <Welcome />
      {/* rest of home page */}
    </>
  );
}
