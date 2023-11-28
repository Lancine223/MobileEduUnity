import { Component, OnInit , Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Etudiant } from 'src/app/model/etudiant';
import { StatusEtudiant } from 'src/app/model/status-etudiant';
import { AuthetudiantService } from 'src/app/service/authetudiant.service';
import { EtudiantService } from 'src/app/service/etudiant.service';

@Component({
  selector: 'app-modifierbilletin',
  templateUrl: './modifierbilletin.component.html',
  styleUrls: ['./modifierbilletin.component.scss'],
})
export class ModifierbilletinComponent  implements OnInit {
  bulletinForm: FormGroup;
  etudiant: Etudiant|undefined;
  alertController: any;

  bulletinSrc: string | any;

  bulletin!: File;

  constructor(
    private _dialogRef: MatDialogRef<ModifierbilletinComponent>,
    private formBuilder: FormBuilder,
    private authService: AuthetudiantService,
    private etudiantService: EtudiantService,
    @Inject(MAT_DIALOG_DATA) public data: StatusEtudiant | any
  ) {
    this.etudiant = JSON.parse(localStorage.getItem('etudiant')!);
    this.bulletinForm = this.formBuilder.group({
      idStatusEtudiant: this.data ? this.data.StatusEtudiant : '', // Si c'est une modification, initialisez avec l'ID existant
      examen: [this.data ? this.data.examen : '', Validators.required],
      bulletin: [this.data ? this.data.bulletin : '', Validators.required],
      etudiant: this.etudiant, //

    });
  }
  ngOnInit(): void {
    this.bulletinForm.patchValue(this.data);
    this.authService.update$.subscribe(() => {
      this.etudiant = JSON.parse(localStorage.getItem('etudiant')!);
    });
  }

  ImageChange(event: any) {
    this.bulletin = event.target.files[0];
    console.log(this.bulletin);
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.bulletinSrc = reader.result as string;
        this.bulletinForm.patchValue({
          fileSource: reader.result
        });
      };
    }
  }

  onSubmit() {
    if (this.bulletinForm.valid) {
      const data = this.bulletinForm.value;
      if (this.data) {
        // Update
        this.etudiantService.updateStatusEtudiant(this.data.idStatusEtudiant, data, this.bulletin).subscribe(
          (response) => {
            this.bulletinForm.reset();
            this._dialogRef.close(true);
            this.etudiantService.triggerUpdate();
          },
          async (error) => {
            const msg = error.error.message;
            const alert = await this.alertController.create({
              header: 'Erreur de validation',
              message: msg,
              buttons: ['OK']
            });
            await alert.present();
          }
        );


      } else {
        // Create

        this.etudiantService.createstatusEtudiant(data, this.bulletin).subscribe(
          (response) => {

            this.bulletinForm.reset();
            this._dialogRef.close(true);
            this.etudiantService.triggerUpdate();
          },
          async (error) => {
            const msg = error.error.message;
            const alert = await this.alertController.create({
              header: 'Erreur de validation',
              message: msg,
              buttons: ['OK']
            });
            await alert.present();
          }
        );
        this.etudiantService.triggerUpdate();


      }

    }

  }

}
