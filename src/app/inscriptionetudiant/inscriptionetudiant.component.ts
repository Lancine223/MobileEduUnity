import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Classe } from '../model/classe';
import { Filiere } from '../model/filiere';
import { Niveau } from '../model/niveau';
import { AuthService } from '../service/auth.service';
import { ClasseService } from '../service/classe.service';
import { FiliereService } from '../service/filiere.service';
import { NiveauService } from '../service/niveau.service';
import { EtudiantService } from '../service/etudiant.service';
import { Etudiant } from '../model/etudiant';
import { AuthetudiantService } from '../service/authetudiant.service';

@Component({
  selector: 'app-inscriptionetudiant',
  templateUrl: './inscriptionetudiant.component.html',
  styleUrls: ['./inscriptionetudiant.component.scss'],
})
export class InscriptionetudiantComponent  implements OnInit {

  etudiantForm!: FormGroup |any;
  etudiantRecup: Etudiant | undefined;
  dataEtudiant : any;
  niveaux: Niveau[]|any;
  filieres: Filiere[]|any;
  classes: Classe[]|any;


  constructor(private formBuilder: FormBuilder,
    // private snack : CoreService,
    private route: Router,
    private etudiantService: EtudiantService,
     private authService: AuthetudiantService,
     private alertController: AlertController,
     private niveauService: NiveauService,
     private filieresService: FiliereService,
     private classesService: ClasseService
     ) {
      // this.niveaux[0]= this.niveau1;

    // this.enseignantRecup = this.authService.getEnseignantConnect();
    // console.log("Admin recup dans guide ", this.adminRecup);

    this.etudiantForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: [ , Validators.required],
      telephone: [ , Validators.required],
      motDePasse: ['', Validators.required],
      niveau: ['', Validators.required],
      filiere: ['', Validators.required],
      classe: ['', Validators.required],
  });

  }

  ngOnInit(): void {
    this.loadNiveauList();
    this.loadFilieres();
    this.loadClasses();
    // this.loadFilieres(this.niveau1.idNiveau);
  }






        ////////////////////

  async creerEtudiant() {
    if(this.etudiantForm.valid){
      const etudiant = this.etudiantForm.value
      // Obtenez l'élément input par son ID
            const monInput: HTMLInputElement | null = document.getElementById('repeter') as HTMLInputElement;
            const valeurInput: string = monInput.value;
            // Vérifiez si l'élément a été trouvé
              // Obtenez la valeur de l'élément


              // Faites quelque chose avec la valeur
              console.log('La valeur de mon input est :', valeurInput);


      if(valeurInput !== etudiant.motDePasse){
        this.motdepasseinval();
      }else{

        this.etudiantService.creerEtudiant(etudiant).subscribe(
           (response: any) => {

           this.route.navigate(['/student']);
            localStorage.setItem('etudiant', JSON.stringify(response));
            this.authService.triggerUpdate();
          this.afficherSucces();
          },
           (error:any) => {
            // Handle login error
            // console.log("1",error.error.message.text);
            const errorMessage = JSON.parse(error.error).message;

            this.afficherErreur(errorMessage);

          }
        );

    }
    }else{
      this.afficherRemplir();
    }
  }






  async afficherErreur(message: string) {
    const alert = await this.alertController.create({
      header: 'Erreur',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async afficherSucces() {
    const alert = await this.alertController.create({
      header: 'Succès',
      message: 'Votre compte a été créé avec succès.',
      buttons: ['OK']
    });

    await alert.present();
  }
  async afficherRemplir() {
    const alert = await this.alertController.create({
      header: 'Message',
      message: 'Veuillez remplir tout les champs',
      buttons: ['OK']
    });

    await alert.present();
  }

  async motdepasseinval() {
    const alert = await this.alertController.create({
      header: 'Message',
      message: 'Mot de passe sont différent',
      buttons: ['OK']
    });

    await alert.present();
  }


        ///////////////////

loadNiveauList(): void {
          this.niveauService.getNiveauList().subscribe(
            (data) => {
              this.niveaux = data;
            },
            (error) => {
              console.error('Erreur lors du chargement de la liste des niveaux:', error);
            }
          );
}

async loadFilieres() {
  try {
    const niveauId = this.etudiantForm.get('niveau')?.value;
    if (niveauId) {
      const filieres = await this.filieresService.getFilieresByNiveau(niveauId).toPromise();
      this.filieres = filieres;
    }
  } catch (error) {
    console.error('Erreur lors du chargement des filières', error);

    const alert = await this.alertController.create({
      header: 'Erreur',
      message: 'Une erreur s\'est produite lors du chargement des filières.',
      buttons: ['OK']
    });

    await alert.present();
  }
}

async loadClasses() {
  try {
    const filiereId = this.etudiantForm.get('filiere')?.value;
    if (filiereId) {
      const classes = await this.classesService.getClassesByFiliere(filiereId).toPromise();
      this.classes = classes;
    }
  } catch (error) {
    console.error('Erreur lors du chargement des classes', error);

    const alert = await this.alertController.create({
      header: 'Erreur',
      message: 'Une erreur s\'est produite lors du chargement des classes.',
      buttons: ['OK']
    });

    await alert.present();
  }
}



}
