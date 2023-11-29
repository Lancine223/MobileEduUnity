import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Apropos } from 'src/app/model/apropos';
import { Enseignant } from 'src/app/model/enseignant';
import { EnseignantService } from 'src/app/service/enseignant.service';

@Component({
  selector: 'app-detail-enseignant',
  templateUrl: './detail-enseignant.component.html',
  styleUrls: ['./detail-enseignant.component.scss'],
})
export class DetailEnseignantComponent  implements OnInit {

  apropos: Apropos|any ;


  constructor(
    private enseignantServ: EnseignantService,
    private _dialog: MatDialog,
    private _dialogRef: MatDialogRef<DetailEnseignantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number | any
  ) {

    this.chargerApropos();
  }

  ngOnInit() {



    this.enseignantServ.update$.subscribe(() => {
      this.chargerApropos();
    });
  }

  chargerApropos(){
    console.log("id est", this.data);

      this.enseignantServ.getAproposByIdEnseignant(this.data).subscribe(apropos => {
        this.apropos = apropos;

    });

    console.log("apropos est", this.apropos);
  }



}
