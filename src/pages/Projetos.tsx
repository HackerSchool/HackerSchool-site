import { useProjects } from "../hooks/useProjects";
import ProjectCard from "../components/ProjectCard";
import "./projetos.css";

export default function Projetos() {
  const { projects, loading, error } = useProjects();

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="page-title">PROJETOS</h1>
      <div className="project-grid">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
