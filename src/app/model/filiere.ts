import { Classe } from "./classe";
import { Enseignant } from "./enseignant";

  export interface Filiere {
    idFiliere: number;
    nom: string;
    classe: Classe[];
    enseignant: Enseignant[];
    // Autres propriétés du niveau
  }

