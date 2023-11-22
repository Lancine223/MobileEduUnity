import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pdfviewerenseignant',
  templateUrl: './pdfviewerenseignant.page.html',
  styleUrls: ['./pdfviewerenseignant.page.scss'],
})
export class PdfviewerenseignantPage implements OnInit {

  document: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const document = params['document'];
      this.document = document;
      // Afficher le PDF correspondant (utilisez une bibliothèque ou plugin pour afficher les PDF)
    });
   }

  ngOnInit() {
  }

}
