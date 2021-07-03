import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  player1: string;
  player2: string;

  onSubmit(f: NgForm) {
    let players = f.value;  // { pl1: '', pl2: '' }
    this.player1 = players?.pl1;
    this.player2 = players?.pl2;
  }
}
