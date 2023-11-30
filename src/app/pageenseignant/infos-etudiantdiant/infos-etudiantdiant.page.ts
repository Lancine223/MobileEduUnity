import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatusEtudiant } from 'src/app/model/status-etudiant';
import { EtudiantService } from 'src/app/service/etudiant.service';

@Component({
  selector: 'app-infos-etudiantdiant',
  templateUrl: './infos-etudiantdiant.page.html',
  styleUrls: ['./infos-etudiantdiant.page.scss'],
})
export class InfosEtudiantdiantPage implements OnInit {

  bulletin: StatusEtudiant|any ;
  idEtudiant: any;

  constructor(
    private etudiantService: EtudiantService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      console.log("param ", params);
      const idEtudiant = params['idEtudiant'];
      this.idEtudiant = idEtudiant;
      console.log("pp ", this.idEtudiant);
      this.chargerBulletin();
      // Afficher le PDF correspondant (utilisez une bibliothèque ou plugin pour afficher les PDF)
    });


  }

  ngOnInit() {



    this.etudiantService.update$.subscribe(() => {
      this.chargerBulletin();
    });
  }

  chargerBulletin(){
      this.etudiantService.getBulletin(this.idEtudiant).subscribe(bulletin => {
      this.bulletin = bulletin;

    });
  }

}
