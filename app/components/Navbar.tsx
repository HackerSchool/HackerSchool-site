import { useState } from "react";
import { Link } from "react-router";
import "./navbar.css";

const NAV_LINKS = [
  { label: { PT: "MEMBROS", EN: "MEMBERS" }, to: "/membros" },
  { label: { PT: "SOBRE NÓS", EN: "ABOUT" }, to: "/sobre-nos" },
  { label: { PT: "PROJETOS", EN: "PROJECTS" }, to: "/projetos" },
  { label: { PT: "RECRUTAMENTO", EN: "RECRUITMENT" }, to: "/recrutamento" },
  { label: { PT: "CONTACTOS", EN: "CONTACT" }, to: "/contactos" },
];

type Lang = "PT" | "EN";

export default function Navbar() {
  const [lang, setLang] = useState<Lang>("PT");
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        {/* swap this for an <img src="/logo.svg" /> once you have the asset exported */}
        HACKER<span className="navbar-logo-sub">{"{school}"}</span>
      </Link>

      <ul className="navbar-links">
        {NAV_LINKS.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label[lang]}</Link>
          </li>
        ))}
      </ul>

      <div className="navbar-lang">
        <button onClick={() => setOpen((o) => !o)} className="navbar-lang-btn">
          {lang} <span className="caret">▾</span>
        </button>
        {open && (
          <ul className="navbar-lang-menu">
            {(["PT", "EN"] as Lang[])
              .filter((l) => l !== lang)
              .map((l) => (
                <li key={l}>
                  <button
                    onClick={() => {
                      setLang(l);
                      setOpen(false);
                    }}
                  >
                    {l}
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
