import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { EnseignantService } from '../service/enseignant.service';
import { AlertController } from '@ionic/angular';
import { Enseignant } from '../model/enseignant';

@Component({
  selector: 'app-connexionenseignant',
  templateUrl: './connexionenseignant.component.html',
  styleUrls: ['./connexionenseignant.component.scss'],
})
export class ConnexionenseignantComponent  implements OnInit {
  loginForm: FormGroup | any;
  enseignant:Enseignant|any;

  constructor(private autService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private enseignantService: EnseignantService,
    private alertController: AlertController,) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, motDePasse } = this.loginForm.value;

      this.enseignantService.login(email, motDePasse).subscribe(
        async response => {
          // Handle successful login response
          console.log('Login successful:', response);
         this.router.navigate(['/teacher']);
         const IdAdmincon = response.idEnseignant;
         localStorage.setItem('idEnseignant', IdAdmincon);
         this.autService.setEnseignantConnect(response);

        },
        async error => {
          // Handle login error
          console.error('Login failed:', error.error.message);
              const alert = await this.alertController.create({
        header: 'Erreur',
        message: error.error.message, // Vérifiez la structure de votre réponse
        buttons: ['OK']
      });
      await alert.present();
        }
      );


    }
  }




}
