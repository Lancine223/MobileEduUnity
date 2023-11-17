import { Enseignant } from "./enseignant";
import { Etudiant } from "./etudiant";

  export interface Classe {
    idClasse: number;
    nom: string;
    montant: string;
    etudiant: Etudiant[];
    enseignant: Enseignant[];
    // Autres propriétés du niveau
  }

