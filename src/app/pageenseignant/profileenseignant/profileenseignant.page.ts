import { Component, OnInit, Inject } from '@angular/core';
import { Enseignant } from 'src/app/model/enseignant';
import { AuthService } from 'src/app/service/auth.service';
import { EnseignantService } from 'src/app/service/enseignant.service';
import { ModifierprofileenseignantComponent } from '../modifierprofileenseignant/modifierprofileenseignant.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profileenseignant',
  templateUrl: './profileenseignant.page.html',
  styleUrls: ['./profileenseignant.page.scss'],
})
export class ProfileenseignantPage implements OnInit {


  enseignant: Enseignant|any;

  constructor(
    private authService: AuthService,
    private ensService: EnseignantService,
    private _dialog: MatDialog,
  ) {
    this.assigneerEnseignant();

  }



  ngOnInit() {

    this.authService.update$.subscribe((result) => {
      this.assigneerEnseignant();
    });

  }

  assigneerEnseignant(){
    this.enseignant = JSON.parse(localStorage.getItem('enseignant')!);
  }



  openEditForm(data: Enseignant, enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this._dialog.open(ModifierprofileenseignantComponent,  {
      data, enterAnimationDuration,
        exitAnimationDuration
    });
  }

}
