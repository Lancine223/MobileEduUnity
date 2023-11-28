import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Etudiant } from 'src/app/model/etudiant';
import { TodoList } from 'src/app/model/todo-list';
import { AuthetudiantService } from 'src/app/service/authetudiant.service';
import { EtudiantService } from 'src/app/service/etudiant.service';
import { ModifiertacheComponent } from '../modifiertache/modifiertache.component';
import { TodolistService } from 'src/app/service/todolist.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.page.html',
  styleUrls: ['./tache.page.scss'],
})
export class TachePage implements OnInit {

  // public folder!: string;
  // private activatedRoute = inject(ActivatedRoute);
  // constructor() {}

  // ngOnInit() {
  //   this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  //}


  tache: TodoList[]|any ;
  etudiant: Etudiant|any;

  constructor(
    private authService: AuthetudiantService,
    private todoService: TodolistService,
    private _dialog: MatDialog
  ) {
    this.etudiant = JSON.parse(localStorage.getItem('etudiant')!);
    this.chargerTache();
  }

  ngOnInit() {

    this.authService.update$.subscribe(() => {
          this.etudiant = JSON.parse(localStorage.getItem('etudiant')!);
    });

    this.todoService.update$.subscribe(() => {
      this.chargerTache();
    });
  }

  chargerTache(){
    const idEtudiant = this.etudiant.idEtudiant;
      this.todoService.listerTaches(idEtudiant).subscribe(tache => {
      this.tache = tache;

    });
  }

  OpenDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string){
    this._dialog.open(ModifiertacheComponent,{enterAnimationDuration,
      exitAnimationDuration});
  }

  openEditForm(data: TodoList, enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this._dialog.open(ModifiertacheComponent,  {
      data, enterAnimationDuration,
        exitAnimationDuration
    });
  }

}
