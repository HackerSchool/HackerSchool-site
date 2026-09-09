export const ordem_equipas = [
  {PT: "Direção", EN: "Board"},
  {PT: "Desenvolvimento", EN: "Dev Team"},
  {PT: "Recursos Humanos", EN: "Human Resources"},
  {PT: "Marketing", EN: "Marketing"},
  {PT: "Gestão Laboratório", EN: "Laboratory Management"},
  {PT: "Membros", EN: "Members"},
] as const;

export const labels_equipas: Record<string, {PT: string; EN: string }> = {
  "direcao": {PT: "Direção", EN: "Board"},
  "dev": {PT: "Desenvolvimento", EN: "Dev Team"},
  "RH": {PT: "Recursos Humanos", EN: "Human Resources"},
  "marketing": {PT: "Marketing", EN: "Marketing"},
  "lab": {PT: "Gestão Laboratório", EN: "Laboratory Management"},
  "membro": {PT: "Membros", EN: "Members"},
}

export const labels_roles:Record<string, {PT: string; EN: string }> = {
  "pres": {PT: "Presidente", EN: "President"},
  "vice": {PT: "Vice Presidente", EN: "Vice President"},
  "tres": {PT: "Tesoureiro", EN: "Treasurer"},
  "coord-rh": {PT: "Coordenador HR", EN: "HR Coordinator"},
  "coord-dev": {PT: "Coordenador Dev", EN: "Dev Coordinator"},
  "coord-mark": {PT: "Coordenador Marketing", EN: "Marketing Coordinator"},
  "coord-lab": {PT: "Coordenador OpenLab", EN: "OpenLab Coordinator"},
  "lab": {PT: "Monitor Lab", EN: "Lab Monitor"},
}
