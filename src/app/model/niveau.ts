import { Enseignant } from "./enseignant";
import { Filiere } from "./filiere";

export interface Niveau {
  idNiveau: number;
  nom: string;
  filiere: Filiere[];
  enseignant: Enseignant[];
  // Autres propriétés du niveau
}
