import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videos } from 'src/app/model/videos';
import { VideosService } from 'src/app/service/videos.service';

@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.page.html',
  styleUrls: ['./list-video.page.scss'],
})
export class ListVideoPage implements OnInit {

  idEnseignant: any;
  listVideos: Videos[]|any;

  constructor(private route: ActivatedRoute,
    private videosService: VideosService,) {
    this.route.params.subscribe(params => {
      const idEnseignant = params['idEnseignant'];
      this.idEnseignant = idEnseignant;
      this.getListeVideosByEnseignant();
      // Afficher le PDF correspondant (utilisez une bibliothèque ou plugin pour afficher les PDF)
    });
   }


   ngOnInit() {

    this.videosService.update$.subscribe(() => {
      this.getListeVideosByEnseignant();
    });

  }

  async getListeVideosByEnseignant() {

        const listVideos = await this.videosService.getListeByEnseignant(this.idEnseignant).toPromise();
        this.listVideos = listVideos;
  }


}
