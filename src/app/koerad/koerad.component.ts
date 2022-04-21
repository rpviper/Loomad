import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-koerad',
  templateUrl: './koerad.component.html',
  styleUrls: ['./koerad.component.css']
})
export class KoeradComponent implements OnInit {

  dogs: any[] = [];

  constructor() { }

  ngOnInit(): void {
  

const dogsLS = localStorage.getItem("dogs")
if (dogsLS) {
  this.dogs = JSON.parse(dogsLS);
    }
  }
}
