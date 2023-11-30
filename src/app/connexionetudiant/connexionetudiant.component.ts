import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EtudiantService } from '../service/etudiant.service';
import { AlertController } from '@ionic/angular';
import { AuthetudiantService } from '../service/authetudiant.service';

@Component({
  selector: 'app-connexionetudiant',
  templateUrl: './connexionetudiant.component.html',
  styleUrls: ['./connexionetudiant.component.scss'],
})
export class ConnexionetudiantComponent  implements OnInit {

  loginForm: FormGroup | any;
  etudiant:Etudiant|any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private etudiantService: EtudiantService,
    private authService: AuthetudiantService,
    private alertController: AlertController,) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      telephone: ['' , [Validators.required]],
      motDePasse: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const { telephone, motDePasse } = this.loginForm.value;
      this.etudiantService.login(telephone, motDePasse).subscribe(
        async response => {
         this.router.navigate(['/student']);
         localStorage.setItem('etudiant', JSON.stringify(response));
         this.authService.triggerUpdate();
        },
        async error => {
              const alert = await this.alertController.create({
        header: 'Erreur',
        message: error.error.message, // Vérifiez la structure de votre réponse
        buttons: ['OK']
      });
      await alert.present();
        }
      );

    }else{
      const alert = await this.alertController.create({
        header: 'Message',
        message: 'Veillez remplire tout les champs !', // Vérifiez la structure de votre réponse
        buttons: ['OK']
      });
      await alert.present();

    }
  }

}
