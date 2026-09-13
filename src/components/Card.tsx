import type { ReactNode } from "react";
import "./card.css";

type CardProps = {
  title: string;
  children: ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="card-content">{children}</div>
    </div>
  );
}
