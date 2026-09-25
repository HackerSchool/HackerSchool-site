export type ProjectMembers = {
  ist_id: string;
  name: string;
}

export type Project = {
  slug: string;
  name: string;
  description?: string;
  members: ProjectMembers[];
  git?: string;
}
