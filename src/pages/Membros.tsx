import { useLanguage } from "../context/LanguageContext";
import { useMembers } from "../hooks/useMembers";
import MemberCard from "../components/MemberCard";
import { TEAM_ORDERS, TEAM_LABELS } from "../config/labels";

import "./membros.css"

export default function Membros() {
  const { lang } = useLanguage();
  const { members, loading, error } = useMembers();

  if (loading) return <p>Loading members...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {TEAM_ORDERS.map((teamKey) => {
        const teamMembers = members.filter((m) =>
  m.teams?.some((team) =>
    team.split(",").map((t) => t.trim()).includes(teamKey)
  )
);
        if (teamMembers.length === 0) return null;

        const teamLabel = TEAM_LABELS[teamKey]?.[lang] ?? teamKey;

        return (
          <section key={teamKey}>
            <h1 className="page-title">{teamLabel}</h1>
            <div className="member-row">
              {teamMembers.map((m) => (
                <MemberCard key={m.ist_id} member={m} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
