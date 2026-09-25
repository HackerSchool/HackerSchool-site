export const TEAM_ORDERS = [
  "direcao",
  "dev",
  "rh",
  "marketing",
  "lab",
  "membro",
] as const;

export const TEAM_LABELS: Record<string, {PT: string; EN: string }> = {
  "direcao": {PT: "Direção", EN: "Board"},
  "dev": {PT: "Desenvolvimento", EN: "Dev Team"},
  "rh": {PT: "Recursos Humanos", EN: "Human Resources"},
  "marketing": {PT: "Marketing", EN: "Marketing"},
  "lab": {PT: "Gestão Laboratório", EN: "Laboratory Management"},
  "membro": {PT: "Membros", EN: "Members"},
}

export const ROLES_LABELS: Record<string, {PT: string; EN: string }> = {
  "pres": {PT: "Presidente", EN: "President"},
  "vice": {PT: "Vice Presidente", EN: "Vice President"},
  "tres": {PT: "Tesoureiro", EN: "Treasurer"},
  "coord-rh": {PT: "Coordenador HR", EN: "HR Coordinator"},
  "coord-dev": {PT: "Coordenador Dev", EN: "Dev Coordinator"},
  "coord-mark": {PT: "Coordenador Marketing", EN: "Marketing Coordinator"},
  "coord-lab": {PT: "Coordenador OpenLab", EN: "OpenLab Coordinator"},
  "lab": {PT: "Monitor Lab", EN: "Lab Monitor"},
  "dev": {PT: "Dev", EN: "Dev"},
  "rh": {PT: "RH", EN: "RH"},
  "membro": {PT: "", EN: ""},
}
