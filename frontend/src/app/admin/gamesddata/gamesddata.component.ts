import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { CounterService } from '../../counter.service';

@Component({
  selector: 'app-gamesddata',
  templateUrl: './gamesddata.component.html',
  styleUrls: ['./gamesddata.component.css']
})
export class GamesddataComponent implements OnInit {

  games;
  createGames;

  constructor(private formBuilder: FormBuilder, private counterService: CounterService, private _location: Location) {
    this.createGames = this.formBuilder.group({
      "name": '',
      "link": '',
      "count": '',

    });
  }

  ngOnInit() {
  }

  postGamesData(postData) {
    let countData = postData.count;
    postData.count = parseInt(countData);
    this.counterService.setgamesData(postData)
      .subscribe(games => {
        this.games = games;
      });
  }

  backClicked() {
    this._location.back();
  }

}