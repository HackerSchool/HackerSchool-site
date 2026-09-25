import type { Project } from "../types/project";
import "./project-card.css";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h3 className="project-name">{project.name}</h3>
      <p className="project-state">{project.state}</p>
      <p className="project-state">{project.description}</p>

      {project.members.length > 0 ? (
        <ul className="project-members">
          {project.members.map((m) => (
            <li key={m.ist_id}>{m.name}</li>
          ))}
        </ul>
      ) : (
        <p className="project-members-empty">No members yet</p>
      )}
    </div>
  );
}
