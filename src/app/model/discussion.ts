import { Enseignant } from "./enseignant";
import { Etudiant } from "./etudiant";
import { Forum } from "./forum";

export interface Discussion {
  idDiscussion: number;
  message:      string;
  forum:        Forum;
  etudiant:     Etudiant;
  enseignant:   Enseignant;
}
