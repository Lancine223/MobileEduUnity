import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { QuizexempleComponent } from './pageetudiant/quizexemple/quizexemple.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DemarrageComponent } from './demarrage/demarrage.component';
import { ConnexionenseignantComponent } from './connexionenseignant/connexionenseignant.component';
import { ConnexionetudiantComponent } from './connexionetudiant/connexionetudiant.component';
import { DemarrageDeuxComponent } from './demarrage-deux/demarrage-deux.component';
import { InscriptionenseignantComponent } from './inscriptionenseignant/inscriptionenseignant.component';
import { InscriptionetudiantComponent } from './inscriptionetudiant/inscriptionetudiant.component';
import { EnseignantService } from './service/enseignant.service';

@NgModule({
  declarations: [AppComponent,QuizexempleComponent,
     DemarrageComponent,
     ConnexionenseignantComponent,
      ConnexionetudiantComponent,
       DemarrageDeuxComponent,
       InscriptionenseignantComponent,
       InscriptionetudiantComponent ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
