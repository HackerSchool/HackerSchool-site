import { useState } from "react";
import type { Member } from "../types/memberType";
import { useLanguage } from "../context/LanguageContext";
import { ROLES_LABELS } from "../config/labels";
import "./member-card.css";

type MemberCardProps = {
  member: Member;
};

export default function MemberCard({ member }: MemberCardProps) {
  const { lang } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  // Fallback prevents a crash if `member.role` doesn't match any key in
  // ROLE_LABELS (e.g. a typo in members.json). Falls back to showing the
  // raw id string instead, so the mistake is visible rather than fatal.
  const roleLabel = ROLES_LABELS[member.role]?.[lang] ?? member.role;

  return (
    <button
      className="member-card"
      onClick={() => setExpanded((e) => !e)}
      aria-expanded={expanded}
    >
      <h3 className="member-name">{member.name}</h3>
      <p className="member-role">{roleLabel}</p>

      {member.photoUrl ? (
        <img src={member.photoUrl} alt={member.name} className="member-photo" />
      ) : (
        <div className="member-photo member-photo-placeholder" />
      )}

      {expanded && (
        <div className="member-details">
          <p>{member.email}</p>
          {member.github && <p>GitHub: {member.github}</p>}
          {member.bio && <p className="member-bio">{member.bio}</p>}
        </div>
      )}
    </button>
  );
}
