import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discuterforumenseignant',
  templateUrl: './discuterforumenseignant.page.html',
  styleUrls: ['./discuterforumenseignant.page.scss'],
})
export class DiscuterforumenseignantPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id'); // Convertir l'ID en nombre
      this.niveauService.getNiveauById(id).subscribe(niveau => this.niveau = niveau);
      this.loadFilieres(id);

    });
  }

}
