import { Enseignant } from "./enseignant";

export interface Forum {
  idForum: number;
  titre: string;
  dateForum: string;
  enseignant: Enseignant;
}
