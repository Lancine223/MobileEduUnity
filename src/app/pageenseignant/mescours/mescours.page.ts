import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cours } from 'src/app/model/cours';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AjoutercoursComponent } from '../ajoutercours/ajoutercours.component';
import { Enseignant } from 'src/app/model/enseignant';
import { CoursService } from 'src/app/service/cours.service';
import { AuthService } from 'src/app/service/auth.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-mescours',
  templateUrl: './mescours.page.html',
  styleUrls: ['./mescours.page.scss'],
})
export class MescoursPage implements OnInit {
  listCours: Cours[]|any;

  enseignant: Enseignant|any;
  constructor(  private _dialog: MatDialog,
    private coursService: CoursService,
    private sanitizer: DomSanitizer,
    private authService: AuthService,
    private alertController: AlertController) {
      this.enseignant = this.authService.getEnseignantConnect();
      this.getListeCoursByEnseignant();
     }

  ngOnInit() {

    this.coursService.update$.subscribe(() => {
      this.getListeCoursByEnseignant();
      console.log("cours :", this.listCours)
    });

  }

  async getListeCoursByEnseignant() {
    try {
      const niveauId = this.enseignant.idEnseignant;
      console.log('ID de l\'enseignant :', niveauId);

      if (niveauId) {
        const listCours = await this.coursService.getListeByEnseignant(niveauId).toPromise();
        console.log('Cours récupérés du service :', listCours);

        this.listCours = listCours;
        console.log('Mes cours après attribution :', this.listCours);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des cours', error);
    }
  }


  openDocument(documentPath: string) {
    // Assumez que documentPath contient le chemin du document (peut être un PDF, Word, etc.)

    // Dans cet exemple, on suppose que le chemin est une URL vers le document.
    // Vous devrez adapter cela en fonction de la structure de vos documents.

    // Sécurisez l'URL du document pour éviter les problèmes de sécurité.
    const safeUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(documentPath);

    // Ouvrez une nouvelle page ou une modale pour afficher le document.
    // Vous devrez créer une nouvelle page ou modale pour gérer cela.
  }

  async presentAlert(cours: any) {
    const alert = await this.alertController.create({
      header: 'Voulez-vous supprimer ce cours ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Suppression annulée');
          },
        },
        {
          text: 'OK',
          handler: () => {
            this.deleteCours(cours);
          },
        },
      ],
    });

    await alert.present();
  }

  deleteCours(cours: any) {
    this.coursService.deleteCours(cours).subscribe(
      (response) => {
        // Le cours a été supprimé avec succès, vous pouvez mettre à jour la liste des cours si nécessaire
        this.getListeCoursByEnseignant();
        this.coursService.triggerUpdate();
      },
      (error) => {
        console.error('Erreur lors de la suppression du cours :', error);
        this.getListeCoursByEnseignant();
        this.coursService.triggerUpdate();
      }
    );
    this.getListeCoursByEnseignant();
    this.coursService.triggerUpdate();
  }



  OpenDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string){
    this._dialog.open(AjoutercoursComponent,{enterAnimationDuration,
      exitAnimationDuration});
  }

  openEditForm(data: Cours, enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this._dialog.open(AjoutercoursComponent,  {
      data, enterAnimationDuration,
        exitAnimationDuration
    });
  }

}
