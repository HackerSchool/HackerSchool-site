import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function TypingIntro() {
  const { lang } = useLanguage();
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const translations = {
      PT: "HackerSaudações. Estávamos à tua espera.",
      EN: "HackerGreetings. We were expecting you.",
    };
    const text = translations[lang];
    let letter = 0;

    function typeText() {
      if (!target) return;
      if (letter < text.length) {
        target.innerHTML += text.charAt(letter);
        letter++;
        setTimeout(typeText, Math.floor(Math.random() * 50) + 50);
      }
    }

    const timeout = setTimeout(typeText, 500);
    return () => clearTimeout(timeout);
  }, [lang]);

  return <div id="type-js" ref={targetRef} />;
}
