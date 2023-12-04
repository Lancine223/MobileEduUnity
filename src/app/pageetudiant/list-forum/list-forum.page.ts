import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Forum } from 'src/app/model/forum';
import { ForumService } from 'src/app/service/forum.service';

@Component({
  selector: 'app-list-forum',
  templateUrl: './list-forum.page.html',
  styleUrls: ['./list-forum.page.scss'],
})
export class ListForumPage implements OnInit {
  listForum: Forum[]|any;
  idEnseignant: any;

  constructor(
    private forumService: ForumService,
    private route: ActivatedRoute,
    private router: Router) {
      this.route.params.subscribe(params => {
        const idEnseignant = params['idEnseignant'];
        this.idEnseignant = idEnseignant;
        this.getListeForumByEnseignant();        // Afficher le PDF correspondant (utilisez une bibliothèque ou plugin pour afficher les PDF)
      });
      this.getListeForumByEnseignant();
     }
    //  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  ngOnInit() {

    this.forumService.update$.subscribe(() => {
      this.getListeForumByEnseignant();
    });

  }

  async getListeForumByEnseignant() {

        const listForum = await this.forumService.getListeForums(this.idEnseignant).toPromise();

        this.listForum = listForum;

  }


  onDocumentClick(idForum: number) {
    // Naviguer vers la page de visualisation du PDF avec le nom du document en tant que paramètre
    this.router.navigate(['/discussion-etudiant', idForum]);
    localStorage.setItem("idEnForum", this.idEnseignant);
  }

}
