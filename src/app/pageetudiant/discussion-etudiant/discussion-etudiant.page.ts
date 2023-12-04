import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable, switchMap, tap } from 'rxjs';
import { Etudiant } from 'src/app/model/etudiant';
import { Forum } from 'src/app/model/forum';
import { AuthetudiantService } from 'src/app/service/authetudiant.service';
import { DiscussionService } from 'src/app/service/discussion.service';
import { ForumService } from 'src/app/service/forum.service';

@Component({
  selector: 'app-discussion-etudiant',
  templateUrl: './discussion-etudiant.page.html',
  styleUrls: ['./discussion-etudiant.page.scss'],
})
export class DiscussionEtudiantPage implements OnInit {

  etudiant: Etudiant|any
  messageForm2!: FormGroup|any;
  forum: Forum|any;
  idEnseignant: any;
  discussions: []|any;
  constructor(
    private forumService: ForumService,
     private route: ActivatedRoute,
     private formBuilder: FormBuilder,
     private router: Router,
     private authEtService: AuthetudiantService,
     private alertController: AlertController,
     private discussionService: DiscussionService ) {
      this.assigneerEnseignant();
    this.idEnseignant = localStorage.getItem('idEnForum');
    this.chargeForum();
    this.messageForm2 = this.formBuilder.group({
      message: ['', Validators.required],
      etudiant: '',
      enseignant: '',
      forum: '',

    });



     }

  ngOnInit() {

    this.authEtService.update$.subscribe((result) => {
      this.assigneerEnseignant();
    });
    this.idEnseignant = localStorage.getItem('idEnForum');
    this.etudiant = JSON.parse(localStorage.getItem('etudiant')!);
    this.chargeForum().subscribe(
      () => {

      },
      (error) => {
        console.error('Erreur lors du chargement du forum', error.error.message);
        // Gérer l'erreur selon vos besoins
      }
    );

      this.discussionService.update$.subscribe(()=>{
        this.loadDiscussions(this.forum.idForum);
        this.chargeForum();
      })

  }


  chargeForum(): Observable<any> {
    return this.route.paramMap.pipe(
      switchMap((params: any) => {
        const id = +params.get('idForum');
        return this.forumService.getOneForum(id);
      }),
      tap((forum: any) => {
        this.forum = forum;
        this.loadDiscussions(forum.idForum); // Utilisez l'id du forum ici

      })
    );
  }

  assigneerEnseignant(){
    this.etudiant = JSON.parse(localStorage.getItem('etudiant')!);
  }

  loadDiscussions(idFoum: number): void {
    this.discussionService.getListeDiscussions(idFoum).subscribe(
      (discussions: any[]) => {
        this.discussions = discussions;
      },
      (error) => {
        console.error('Erreur lors du chargement des discussions', error);
        // Gérer l'erreur selon vos besoins
      }
    );
  }

  onSubmit() {
    if (this.messageForm2.valid ) {
      const data = this.messageForm2.value;
      data.forum = this.forum.idForum;
      data.enseignant = 0;
      data.etudiant = this.etudiant.idEtudiant;

      this.discussionService.ajouterDiscussion(data).subscribe(
        (response) => {
          this.messageForm2.reset();
          this.discussionService.triggerUpdate();
          this.forumService.triggerUpdate();
        },
        async (error) => {
          console.error('Message lors de l\'ajout de la discussion', error.error.text);
          this.messageForm2.reset();
          this.discussionService.triggerUpdate();
          this.forumService.triggerUpdate();

        }
      ).add(() => {
        this.forumService.triggerUpdate();
        this.messageForm2.reset();
          this.discussionService.triggerUpdate();
          this.forumService.triggerUpdate();
      });

    }

  }



  async presentAlert(discussion: any) {
    const alert = await this.alertController.create({
      header: 'Voulez-vous supprimer cet message ?',
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
            this.deletediscussion(discussion);
          },
        },
      ],
    });

    await alert.present();
  }

  deletediscussion(discussion: any) {
    this.discussionService.supprimerDiscussion(discussion).subscribe(
      (response) => {
        // Le cours a été supprimé avec succès, vous pouvez mettre à jour la liste des cours si nécessaire
        this.forumService.triggerUpdate();
        this.chargeForum();
        this.discussionService.triggerUpdate();
      },
      (error) => {
        console.error('Erreur lors de la suppression du message :', error);
        this.forumService.triggerUpdate();
        this.chargeForum();
        this.discussionService.triggerUpdate();
      }
    );
    this.forumService.triggerUpdate();
    this.chargeForum();
    this.discussionService.triggerUpdate();
  }


}
