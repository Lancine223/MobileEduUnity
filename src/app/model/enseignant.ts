import { Classe } from "./classe";
import { Filiere } from "./filiere";
import { Niveau } from "./niveau";

export interface Enseignant {
  idEnseignant: number;
  nom: string;
  prenom: string;
  etablissement: string;
  telephone: string;
  nombreAbonnes: number;
  diplome: string;
  acces: boolean;
  email: string;
  motDePasse: string;
  classe: number; // Ajout de la référence à la classe
  filiere: number; // Ajout de la référence à la filière
  niveau: number; //
}

