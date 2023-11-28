import { Component, OnInit } from '@angular/core';
import { ModifierbilletinComponent } from '../modifierbilletin/modifierbilletin.component';
import { StatusEtudiant } from 'src/app/model/status-etudiant';
import { MatDialog } from '@angular/material/dialog';
import { Etudiant } from 'src/app/model/etudiant';
import { AuthetudiantService } from 'src/app/service/authetudiant.service';
import { EtudiantService } from 'src/app/service/etudiant.service';

@Component({
  selector: 'app-monbilletin',
  templateUrl: './monbilletin.page.html',
  styleUrls: ['./monbilletin.page.scss'],
})
export class MonbilletinPage implements OnInit {

  bulletin: StatusEtudiant|any ;
  etudiant: Etudiant|any;

  constructor(
    private authService: AuthetudiantService,
    private etudiantService: EtudiantService,
    private _dialog: MatDialog
  ) {
    this.etudiant = JSON.parse(localStorage.getItem('etudiant')!);
    this.chargerBulletin();
  }

  ngOnInit() {

    this.authService.update$.subscribe(() => {
          this.etudiant = JSON.parse(localStorage.getItem('etudiant')!);
    });

    this.etudiantService.update$.subscribe(() => {
      this.chargerBulletin();
    });
  }

  chargerBulletin(){
    const idEtudiant = this.etudiant.idEtudiant;
      this.etudiantService.getBulletin(idEtudiant).subscribe(bulletin => {
      this.bulletin = bulletin;

    });
  }

  OpenDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string){
    this._dialog.open(ModifierbilletinComponent,{enterAnimationDuration,
      exitAnimationDuration});
  }

  openEditForm(data: StatusEtudiant, enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this._dialog.open(ModifierbilletinComponent,  {
      data, enterAnimationDuration,
        exitAnimationDuration
    });
  }

}
