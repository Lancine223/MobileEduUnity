import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Forum } from 'src/app/model/forum';
import { DiscussionService } from 'src/app/service/discussion.service';
import { ForumService } from 'src/app/service/forum.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Enseignant } from 'src/app/model/enseignant';
import { AlertController } from '@ionic/angular';
import { Observable, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-discuterforumenseignant',
  templateUrl: './discuterforumenseignant.page.html',
  styleUrls: ['./discuterforumenseignant.page.scss'],
})
export class DiscuterforumenseignantPage implements OnInit {

  enseignant: Enseignant;
  messageForm: FormGroup;
  forum: Forum|any;
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
      console.log('forum ', this.forum);
      this.messageForm = this.formBuilder.group({
        message: ['', Validators.required],
        forum: this.forum,
        etudiant: null,
        enseignant: this.enseignant, //
      });

     }

  ngOnInit() {

    this.discussionService.update$.subscribe(() => {
      this.chargeForum();
    });

    this.chargeForum().subscribe(
      () => {},
      (error) => {
        console.error('Erreur lors du chargement du forum', error);
        // Gérer l'erreur selon vos besoins
      }
    );

  }

  chargeForum(): Observable<any> {
    return this.route.paramMap.pipe(
      switchMap((params: any) => {
        const id = +params.get('id');
        return this.forumService.getOneForum(id);
      }),
      tap((forum: any) => {
        this.forum = forum;
        this.loadDiscussions(forum.id); // Utilisez l'id du forum ici
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
    if (this.messageForm.valid && this.forum) {
      const data = this.messageForm.value;
      data.forum = this.forum;
        this.discussionService.ajouterDiscussion(data).subscribe(
          (response) => {
            this.messageForm.reset();
            this.discussionService.triggerUpdate();
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
        this.forumService.triggerUpdate();
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
      },
      (error) => {
        console.error('Erreur lors de la suppression du message :', error);
        this.forumService.triggerUpdate();
        this.chargeForum();
      }
    );
    this.forumService.triggerUpdate();
    this.chargeForum();
  }

}
