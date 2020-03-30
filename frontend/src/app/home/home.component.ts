import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  covid = {
    last_updated: '',
    bangalore_total_cases: '',
    bangalore_total_recoverd: '',
    bangalore_total_death: '',
    india_total_cases: '',
    india_total_recoverd: '',
    india_total_death: '',
    world_total_cases: '',
    world_total_recoverd: '',
    world_total_death: ''
  };

  games = [
    {
      "name": "ffsdfsddddddddddddd",
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
    this.getCovidData();
    this.getGamesData();
  }

  getGamesData() {
    this.counterService.getgamesData({})
      .subscribe(
        gamesData => {
          this.games = gamesData.games;
        }
      );
  }

  getCovidData() {
    this.counterService.getCovidData({})
      .subscribe(
        covidData => {
          this.covid = covidData.covid;
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
