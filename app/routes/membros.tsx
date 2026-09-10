import { useLanguage } from "../context/LanguageContext";
import { useMembers } from "../hooks/useMembers";
import MemberCard from "../components/MemberCard";
import { TEAM_ORDERS, TEAM_LABELS, ROLES_LABELS  } from "../config/labels";
import "./membros.css";

export default function Membros() {
  const { lang } = useLanguage();
  const { members, loading, error } = useMembers();

  if (loading) return <p>Loading members...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {TEAM_ORDERS.map((branchKey) => {
        const branchMembers = members.filter((m) => m.teams.includes(branchKey));
        if (branchMembers.length === 0) return null;

        // Fallback prevents a crash if `branchKey` doesn't match any key in
        // BRANCH_LABELS. Falls back to the raw id string, so a typo in
        // BRANCH_ORDER or labels.ts shows up visibly instead of crashing the page.
        const branchLabel = TEAM_LABELS[branchKey]?.[lang] ?? branchKey;

        return (
          <section key={branchKey}>
            <h1 className="page-title">{branchLabel}</h1>
            <div className="member-row">
              {branchMembers.map((m) => (
                <MemberCard key={m.ist_nr} member={m} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
