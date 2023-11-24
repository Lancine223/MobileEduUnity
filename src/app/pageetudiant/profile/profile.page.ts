import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Etudiant } from 'src/app/model/etudiant';
import { AuthetudiantService } from 'src/app/service/authetudiant.service';
import { EtudiantService } from 'src/app/service/etudiant.service';
import { ModifierprofileetudiantComponent } from '../modifierprofileetudiant/modifierprofileetudiant.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  etudiant: Etudiant|any;

  constructor(
    private authEtService: AuthetudiantService,
    private etudService: EtudiantService,
    private _dialog: MatDialog,
  ) {
    this.assigneerEnseignant();

  }



  ngOnInit() {

    this.authEtService.update$.subscribe((result) => {
      this.assigneerEnseignant();
    });

  }

  assigneerEnseignant(){
    this.etudiant = JSON.parse(localStorage.getItem('etudiant')!);
  }



  openEditForm(data: Etudiant, enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this._dialog.open(ModifierprofileetudiantComponent,  {
      data, enterAnimationDuration,
        exitAnimationDuration
    });
  }

}
