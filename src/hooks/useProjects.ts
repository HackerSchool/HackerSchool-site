import { useEffect, useState } from "react";
import type { Project } from "../types/project";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/projects-full")
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load projects: ${res.status}`);
        return res.json();
      })
      .then((data: Project[]) => setProjects(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { projects, loading, error };
}
