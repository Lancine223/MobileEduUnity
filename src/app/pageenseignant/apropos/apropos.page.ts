import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Apropos } from 'src/app/model/apropos';
import { Enseignant } from 'src/app/model/enseignant';
import { AuthService } from 'src/app/service/auth.service';
import { EnseignantService } from 'src/app/service/enseignant.service';
import { AjouteraproposComponent } from '../ajouterapropos/ajouterapropos.component';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.page.html',
  styleUrls: ['./apropos.page.scss'],
})
export class AproposPage implements OnInit {

  apropos: Apropos|any ;
  enseignant: Enseignant|any;

  constructor(
    private authService: AuthService,
    private enseignantServ: EnseignantService,
    private _dialog: MatDialog
  ) {
    this.enseignant = JSON.parse(localStorage.getItem('enseignant')!);
    this.chargerApropos();
  }

  ngOnInit() {

    this.authService.update$.subscribe(() => {
          this.enseignant = JSON.parse(localStorage.getItem('enseignant')!);
    });

    this.enseignantServ.update$.subscribe(() => {
      this.chargerApropos();
    });
  }

  chargerApropos(){
    const idEnseignant = this.enseignant.idEnseignant;
      this.enseignantServ.getAproposByIdEnseignant(idEnseignant).subscribe(apropos => {
      this.apropos = apropos;

    });
  }





  OpenDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string){
    this._dialog.open(AjouteraproposComponent,{enterAnimationDuration,
      exitAnimationDuration});
  }

  openEditForm(data: Apropos, enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this._dialog.open(AjouteraproposComponent,  {
      data, enterAnimationDuration,
        exitAnimationDuration
    });
  }

}
