import { Enseignant } from "./enseignant";

export interface Apropos {
  idApropos: number;
  biographie: string;
  enseignant: Enseignant;
  // Autres propriétés du niveau
}
