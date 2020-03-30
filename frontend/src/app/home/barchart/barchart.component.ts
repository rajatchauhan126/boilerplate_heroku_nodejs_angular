import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  data: any[];
  Player = [];
  Run = [];
  barchart = [];


  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.data = [
      { "PlayerName": "rajat", "Run": 0 },
      { "PlayerName": "rajat", "Run": 100 },
      { "PlayerName": "rajat2", "Run": 120 },
      { "PlayerName": "rajat3", "Run": 90 },
      { "PlayerName": "rajat4", "Run": 150 }
    ]
    this.loadGraph();
  }

  loadGraph() {
    this.data.forEach(x => {
      this.Player.push(x.PlayerName);
      this.Run.push(x.Run);
    });
    this
    this.barchart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.Player,
        datasets: [
          {
            data: this.Run,
            borderColor: '#3cba9f',
            backgroundColor: [
              "#3cb371",
              "#0000FF",
              "#9966FF",
              "#4C4CFF",
              "#00FFFF",
              "#f990a7",
              "#aad2ed",
              "#FF00FF",
              "Blue",
              "Red",
              "Blue"
            ],
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }
}

