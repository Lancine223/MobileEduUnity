import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MbscModule } from '@mobiscroll/angular';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { QuizexempleComponent } from './pageetudiant/quizexemple/quizexemple.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AjoutervideoComponent } from './pageenseignant/ajoutervideo/ajoutervideo.component';
import { AppComponent } from './app.component';
import { MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ModifierbilletinComponent } from './pageetudiant/modifierbilletin/modifierbilletin.component';
import { AppRoutingModule } from './app-routing.module';
import { DemarrageComponent } from './demarrage/demarrage.component';
import { ConnexionenseignantComponent } from './connexionenseignant/connexionenseignant.component';
import { ConnexionetudiantComponent } from './connexionetudiant/connexionetudiant.component';
import { DemarrageDeuxComponent } from './demarrage-deux/demarrage-deux.component';
import { InscriptionenseignantComponent } from './inscriptionenseignant/inscriptionenseignant.component';
import { InscriptionetudiantComponent } from './inscriptionetudiant/inscriptionetudiant.component';
import { EnseignantService } from './service/enseignant.service';
import { AjoutercoursComponent } from './pageenseignant/ajoutercours/ajoutercours.component';
import { AjouteraproposComponent } from './pageenseignant/ajouterapropos/ajouterapropos.component';
import { ModifierprofileenseignantComponent } from './pageenseignant/modifierprofileenseignant/modifierprofileenseignant.component';
import { AbonnerComponent } from './pageetudiant/abonner/abonner.component';
import { ModifierprofileetudiantComponent } from './pageetudiant/modifierprofileetudiant/modifierprofileetudiant.component';
import { ModifiertacheComponent } from './pageetudiant/modifiertache/modifiertache.component';
// import { MescoursPage } from './pageenseignant/mescours/mescours.page';

@NgModule({
  declarations: [AppComponent,QuizexempleComponent,
     DemarrageComponent,
     ModifierbilletinComponent,
     ModifierprofileetudiantComponent,
     ModifierprofileenseignantComponent,
     ModifiertacheComponent,
     AbonnerComponent,
     ConnexionenseignantComponent,
     AjoutercoursComponent,
     AjoutervideoComponent,
      AjouteraproposComponent,
      ConnexionetudiantComponent,
       DemarrageDeuxComponent,
       InscriptionenseignantComponent,
       InscriptionetudiantComponent ],
  imports: [BrowserModule,
    MatDialogModule,
    PdfViewerModule,
     HttpClientModule,
     ReactiveFormsModule,
      FormsModule,
       IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
