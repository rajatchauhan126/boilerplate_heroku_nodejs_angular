import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../counter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  local;

  constructor(private counterService: CounterService) {

  }

  ngOnInit() {
    this.onSubmit()
  }

  onSubmit() {
    var count = 1;
    console.log('called');
    count = count;
    var counter = { count: count }
    this.counterService.createPost(counter)
      .subscribe(counter => this.local = counter);

  }

}

