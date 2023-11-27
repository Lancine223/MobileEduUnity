import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lesprogrammes',
  templateUrl: './lesprogrammes.page.html',
  styleUrls: ['./lesprogrammes.page.scss'],
})
export class LesprogrammesPage implements OnInit {

  idEnseignant: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const idEnseignant = params['idEnseignant'];
      this.idEnseignant = idEnseignant;
      // Afficher le PDF correspondant (utilisez une bibliothèque ou plugin pour afficher les PDF)
    });
   }

  ngOnInit() {
  }

}
