import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { CounterService } from '../../counter.service';

@Component({
  selector: 'app-coviddata',
  templateUrl: './coviddata.component.html',
  styleUrls: ['./coviddata.component.css']
})
export class CoviddataComponent implements OnInit {

  posts;
  createPost;

  constructor(private formBuilder: FormBuilder, private counterService: CounterService, private _location: Location) {
    this.createPost = this.formBuilder.group({
      last_updated: 'March 29, 2020, 07:35 PM',
      bangalore_total_cases: '',
      bangalore_total_recoverd: '',
      bangalore_total_death: '',
      india_total_cases: '',
      india_total_recoverd: '',
      india_total_death: '',
      world_total_cases: '',
      world_total_recoverd: '',
      world_total_death: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(postData) {
    this.counterService.setCovidData(postData)
      .subscribe(post => {
        this.posts = post;
      });
  }

  backClicked() {
    this._location.back();
  }
}
