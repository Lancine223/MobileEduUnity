import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cours } from 'src/app/model/cours';
import { CoursService } from 'src/app/service/cours.service';

@Component({
  selector: 'app-list-cours',
  templateUrl: './list-cours.page.html',
  styleUrls: ['./list-cours.page.scss'],
})
export class ListCoursPage implements OnInit {

  listCours: Cours[]|any;
  idEnseignant: any;

  constructor(
    private coursService: CoursService,
    private route: ActivatedRoute,
    private router: Router) {
      this.route.params.subscribe(params => {
        const idEnseignant = params['idEnseignant'];
        this.idEnseignant = idEnseignant;
        this.getListeCoursByEnseignant();        // Afficher le PDF correspondant (utilisez une bibliothèque ou plugin pour afficher les PDF)
      });
      this.getListeCoursByEnseignant();
     }
    //  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  ngOnInit() {

    this.coursService.update$.subscribe(() => {
      this.getListeCoursByEnseignant();
    });

  }

  async getListeCoursByEnseignant() {

        const listCours = await this.coursService.getListeByEnseignant(this.idEnseignant).toPromise();

        this.listCours = listCours;

  }


  onDocumentClick(document: string) {
    // Naviguer vers la page de visualisation du PDF avec le nom du document en tant que paramètre
    this.router.navigate(['/readone-cours', document]);
    localStorage.setItem("idEn", this.idEnseignant);
  }



}
