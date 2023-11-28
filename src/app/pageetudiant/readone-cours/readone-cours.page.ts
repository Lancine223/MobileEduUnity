import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-readone-cours',
  templateUrl: './readone-cours.page.html',
  styleUrls: ['./readone-cours.page.scss'],
})
export class ReadoneCoursPage implements OnInit {

  document: any;
  idEnseignant: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const document = params['document'];
      this.document = document;
      // Afficher le PDF correspondant (utilisez une bibliothèque ou plugin pour afficher les PDF)
    });
    this.idEnseignant = localStorage.getItem('idEn');
    console.log("l' id en :",this.idEnseignant);
   }

  ngOnInit() {

  }

}
