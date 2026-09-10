import { useEffect, useRef } from "react";

import "./matrix-backgroud.css" 

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }).fill(1) as number[];
    const delays = Array.from({ length: columns }).map(() => Math.random() * 100);

    function draw() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        if (delays[i] > 0) {
          delays[i]--;
          continue;
        }
        const text = letters[Math.floor(Math.random() * letters.length)];
        const xPos = i * fontSize;
        const canvasMid = canvas.width / 2;
        const opacity = xPos <= canvasMid ? 1 - xPos / canvasMid : (xPos - canvasMid) / canvasMid;

        ctx.fillStyle = `rgba(10, 255, 10, ${opacity})`;
        ctx.fillText(text, xPos, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
          delays[i] = Math.random() * 100;
        }
        drops[i]++;
      }
    }

    const startTimeout = setTimeout(() => {
      const interval = setInterval(draw, 33);
      // stash the interval id somewhere cleanup can reach it
      (canvas as any)._matrixInterval = interval;
    }, 1000);

    return () => {
      clearTimeout(startTimeout);
      clearInterval((canvas as any)._matrixInterval);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-canvas" />;
}
