import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Forum } from 'src/app/model/forum';
import { DiscussionService } from 'src/app/service/discussion.service';
import { ForumService } from 'src/app/service/forum.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Enseignant } from 'src/app/model/enseignant';
import { AlertController } from '@ionic/angular';
import { Observable, switchMap, tap } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-discuterforumenseignant',
  templateUrl: './discuterforumenseignant.page.html',
  styleUrls: ['./discuterforumenseignant.page.scss'],
})
export class DiscuterforumenseignantPage implements OnInit {

  enseignant: Enseignant;
  messageForm!: FormGroup|any;
  forum: Forum|any;
  isLoading = false;
  discussions: []|any;
  constructor(
    private forumService: ForumService,
     private route: ActivatedRoute,
     private formBuilder: FormBuilder,
     private router: Router,
     private alertController: AlertController,
     private discussionService: DiscussionService ) {
    this.chargeForum();
    this.enseignant = JSON.parse(localStorage.getItem('enseignant')!);
    this.messageForm = this.formBuilder.group({
      message: ['', Validators.required],
      forum: '',
      etudiant: '',
      enseignant: '',


    });


     }

  ngOnInit() {




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
      })

  }

  chargeForum(): Observable<any> {
    return this.route.paramMap.pipe(
      switchMap((params: any) => {
        const id = +params.get('id');
        return this.forumService.getOneForum(id);
      }),
      tap((forum: any) => {
        this.forum = forum;
        this.loadDiscussions(forum.idForum); // Utilisez l'id du forum ici
      })
    );
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
    if (this.messageForm.valid ) {
      const data = this.messageForm.value;
      data.forum = this.forum.idForum;
      data.enseignant = this.enseignant.idEnseignant;
      data.etudiant = 0;


      this.discussionService.ajouterDiscussion(data).subscribe(
        (response) => {
          this.messageForm.reset();
          this.discussionService.triggerUpdate();
        },
        async (error) => {
          console.error('Message lors de l\'ajout de la discussion', error.error.text);
          this.forumService.triggerUpdate();
          this.messageForm.reset();
          this.forumService.triggerUpdate();
          this.discussionService.triggerUpdate();
          this.chargeForum();
        }
      ).add(() => {
        this.forumService.triggerUpdate();
      this.messageForm.reset();
      this.forumService.triggerUpdate();
      this.discussionService.triggerUpdate();
      });
      this.forumService.triggerUpdate();
      this.messageForm.reset();
      this.forumService.triggerUpdate();
      this.discussionService.triggerUpdate();

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
