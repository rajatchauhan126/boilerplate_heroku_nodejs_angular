import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  covid = {};
  games = [
    {
      "name": "Want to draw",
      "link": "https://quickdraw.withgoogle.com/",
      "count": 10
    },
    {
      "name": "Tic tac toe",
      "link": "https://playtictactoe.org/",
      "count": 5
    },
    {
      "name": "Snake Game",
      "link": "https://playsnake.org/",
      "count": 3
    },
    {
      "name": "Your birthday special",
      "link": "https://dmarie.com/timecap/",
      "count": 7
    }
  ]


  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.onLoad();
    this.getCovidData();
  }

  increaseCount(data) {
    this.games[data].count = this.games[data].count + 1;
    this.onSubmit();
  }

  onLoad() {
    var localStorageData = localStorage.getItem("games");
    if (localStorageData !== null) {
      this.games = JSON.parse(localStorageData)
    } else {
      this.games = this.games
    }

    this.counterService.gamesData(this.games)
      .subscribe(
        gamesData => {
          this.games = gamesData.games;
          this.setCounter(this.games)
        }
      );
  }

  onSubmit() {
    this.counterService.gamesData(this.games)
      .subscribe(
        gamesData => {
          this.games = gamesData.games;
          this.setCounter(this.games)
        }
      );
  }

  setCounter(data) {
    localStorage.setItem("games", JSON.stringify(data));
  }

  getCovidData() {
    this.counterService.getCovidData({})
      .subscribe(
        covidData => {
          this.covid = covidData.covid;
        }
      );
  }

}
