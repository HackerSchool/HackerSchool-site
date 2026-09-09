// app/hooks/useMembers.ts
import { useEffect, useState } from "react";
import type { Member } from "../types/member";

export function useMembers() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/members.json")
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load members: ${res.status}`);
        return res.json();
      })
      .then((data: Member[]) => setMembers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { members, loading, error };
}
