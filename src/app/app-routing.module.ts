import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { QuizexempleComponent } from './pageetudiant/quizexemple/quizexemple.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'quizexemple',
    component: QuizexempleComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'student',
    loadChildren: () => import('./pageetudiant/student/student.module').then( m => m.StudentPageModule)
  },
  {
    path: 'teacher',
    loadChildren: () => import('./pageenseignant/teacher/teacher.module').then( m => m.TeacherPageModule)
  },
  {
    path: 'tache',
    loadChildren: () => import('./pageetudiant/tache/tache.module').then( m => m.TachePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pageetudiant/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'monbilletin',
    loadChildren: () => import('./pageetudiant/monbilletin/monbilletin.module').then( m => m.MonbilletinPageModule)
  },
  {
    path: 'mesenseignant',
    loadChildren: () => import('./pageetudiant/mesenseignant/mesenseignant.module').then( m => m.MesenseignantPageModule)
  },
  {
    path: 'mesdevoirs',
    loadChildren: () => import('./pageetudiant/mesdevoirs/mesdevoirs.module').then( m => m.MesdevoirsPageModule)
  },

  {
    path: 'lesprogrammes/:idEnseignant',
    loadChildren: () => import('./pageetudiant/lesprogrammes/lesprogrammes.module').then( m => m.LesprogrammesPageModule)
  },
  {
    path: 'list-video/:idEnseignant',
    loadChildren: () => import('./pageetudiant/list-video/list-video.module').then( m => m.ListVideoPageModule)
  },

  {
    path: 'profileenseignant',
    loadChildren: () => import('./pageenseignant/profileenseignant/profileenseignant.module').then( m => m.ProfileenseignantPageModule)
  },
  {
    path: 'programmeenseignant',
    loadChildren: () => import('./pageenseignant/programmeenseignant/programmeenseignant.module').then( m => m.ProgrammeenseignantPageModule)
  },
  {
    path: 'meseleve',
    loadChildren: () => import('./pageenseignant/meseleve/meseleve.module').then( m => m.MeselevePageModule)
  },
  {
    path: 'mesdevoirsenseignant',
    loadChildren: () => import('./pageenseignant/mesdevoirsenseignant/mesdevoirsenseignant.module').then( m => m.MesdevoirsenseignantPageModule)
  },
  {
    path: 'mesvideos',
    loadChildren: () => import('./pageenseignant/mesvideos/mesvideos.module').then( m => m.MesvideosPageModule)
  },
  {
    path: 'mescours',
    loadChildren: () => import('./pageenseignant/mescours/mescours.module').then( m => m.MescoursPageModule)
  },
  {
    path: 'mesquiz',
    loadChildren: () => import('./pageenseignant/mesquiz/mesquiz.module').then( m => m.MesquizPageModule)
  },
  {
    path: 'mesforum',
    loadChildren: () => import('./pageenseignant/mesforum/mesforum.module').then( m => m.MesforumPageModule)
  },
  {
    path: 'apropos',
    loadChildren: () => import('./pageenseignant/apropos/apropos.module').then( m => m.AproposPageModule)
  },
  {
    path: 'pdfviewerenseignant/:document',
    loadChildren: () => import('./pageenseignant/pdfviewerenseignant/pdfviewerenseignant.module').then( m => m.PdfviewerenseignantPageModule)
  },
  {
    path: 'abonnementpage',
    loadChildren: () => import('./pageetudiant/abonnementpage/abonnementpage.module').then( m => m.AbonnementpagePageModule)
  },
  {
    path: 'list-cours/:idEnseignant',
    loadChildren: () => import('./pageetudiant/list-cours/list-cours.module').then( m => m.ListCoursPageModule)
  },
  {
    path: 'readone-cours/:document',
    loadChildren: () => import('./pageetudiant/readone-cours/readone-cours.module').then( m => m.ReadoneCoursPageModule)
  },
  {
    path: 'infos-etudiantdiant/:idEtudiant',
    loadChildren: () => import('./pageenseignant/infos-etudiantdiant/infos-etudiantdiant.module').then( m => m.InfosEtudiantdiantPageModule)
  },
  {
    path: 'discuterforumenseignant/:id',
    loadChildren: () => import('./pageenseignant/discuterforumenseignant/discuterforumenseignant.module').then( m => m.DiscuterforumenseignantPageModule)
  },
  {
    path: 'list-forum/:idEnseignant',
    loadChildren: () => import('./pageetudiant/list-forum/list-forum.module').then( m => m.ListForumPageModule)
  },
  {
    path: 'discussion-etudiant/:idForum',
    loadChildren: () => import('./pageetudiant/discussion-etudiant/discussion-etudiant.module').then( m => m.DiscussionEtudiantPageModule)
  },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
