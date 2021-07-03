import { Component, Input, OnInit } from '@angular/core';
import { PlayerDataService } from '../service/player-data.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() pl1 : string;
  @Input() pl2 : string;
  p1Win : number = 0;
  p2Win : number = 0;
  winner : string;
  diff : number = 0

  constructor(private playerServ: PlayerDataService){};

  ngOnInit(): void {
   
  }

  addWin(p){
    if(p == "p1"){
      this.p1Win = this.p1Win + 1;
    }else if(p == "p2"){
      this.p2Win = this.p2Win + 1;
    }
    if(this.p1Win > this.p2Win){
      this.diff = this.p1Win - this.p2Win;
      this.winner = this.pl1;
    }else if(this.p1Win == this.p2Win){
      this.diff = 0;
      this.winner = "Draw";
    }else{
      this.diff = this.p2Win - this.p1Win;
      this.winner = this.pl2
    }
  }

  saveGame(){
    let obj = {
      "player1" : this.pl1,
      "player1score": this.p1Win,
      "player2": this.pl2,
      "player2score": this.p2Win,
      "winner": this.winner,
      "difference": this.diff
    }
    this.playerServ.saveGameData(obj).subscribe(resp => {
      console.log("re", resp);
    })
  }
}
