import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-quizexemple',
  templateUrl: './quizexemple.component.html',
  styleUrls: ['./quizexemple.component.scss'],
})
export class QuizexempleComponent  implements OnInit {
  showWarning: boolean = false;
  isQuizStarted: boolean = false;
  isQuizEnded: boolean = false;
  questionList: any[]=[];
  currentQuestionNo: number = 0;
  remainingTime: number = 10;
  timer = interval(1000);
  subscribetion: Subscription [] = [];
  correctAnswerCount: number= 0;


  constructor(private http: HttpClient  ) {

  }

  ngOnInit() {
    this.loadQuestions;
  }

  loadQuestions(){
    this.http.get("assets/quiz.json").subscribe((data:any) =>
{
  debugger;
  this.questionList = data;
}
    )
  }

  nextQuestion(){

    if(this.currentQuestionNo < this.questionList.length-1){
      this.currentQuestionNo ++;
    }else{
      this.subscribetion.forEach(element => {
        element.unsubscribe();
      });
    }
  }
isOptionSelected(options: any){
  const selectionCount = options.filter((option: any) => option.isSelected == true).length;
  if(selectionCount == 0) {
    return false;

  }else {
    return true;
  }

}

  showWarningPopup(){
    this.showWarning = true;
  }

  start(){
    this.showWarning = false;
    this.isQuizStarted = false;
    this.isQuizEnded = false;
  }

  selectOption(option: any){
    if(option.isCorrect){
      this.correctAnswerCount ++;
    }
    option.isSelected = true;
  }

finish(){
  this.isQuizEnded = true;
  this.isQuizStarted = false;
}

  startQuiz(){
    this.showWarning = false;
    this.isQuizStarted = true;

    this.subscribetion.push(this.timer.subscribe(res =>{
      console.log(res);
      if(this.remainingTime != 0){
        this.remainingTime --;
      }
      if(this.remainingTime == 0){
        this.nextQuestion();
        this.remainingTime = 10;
      }

    }))
  }

}
