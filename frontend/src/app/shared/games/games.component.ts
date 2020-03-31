import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../counter.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.getGamesData();
    this.callAfterTimeout();
  }

  callAfterTimeout() {
    setTimeout(() => {
      this.getGamesData();
    }, 1000);
  }

  getGamesData() {
    this.counterService.getgamesData({})
      .subscribe(
        gamesData => {
          if (Object.keys(gamesData.games).length === 0) {
            this.games = [];
          } else {
            this.games = gamesData.games;
          }
        }
      );
  }

  updateCount() {
    this.counterService.postgamesCountData(this.games)
      .subscribe(
        gamesData => {
          this.games = gamesData.games;
        }
      );
  }

  increaseCount(data) {
    this.games[data].count = this.games[data].count + 1;
    this.updateCount();
  }

}