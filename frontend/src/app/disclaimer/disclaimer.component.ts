import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

}
