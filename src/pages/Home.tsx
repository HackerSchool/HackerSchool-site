import MatrixBackground from "../components/MatrixBackground";
import TypingIntro from "../components/IntroMatrix";

export default function Home() {
  return (
    <div>
      <MatrixBackground />
      <TypingIntro />
      <div id="hidden-content">
        {/* rest of your homepage content goes here — this div matches the
            id your old matrixstyles.css already styles (display: none by
            default, TypingIntro's fade sequence reveals it) */}
      </div>
    </div>
  );
}
