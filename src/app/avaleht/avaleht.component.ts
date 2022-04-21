import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

addDog(form: any) {
  if (form.valid) {
    let dogs = [];
    
    

    let dogsLS = localStorage.getItem("dogs");
    if (dogsLS) {
      dogs = JSON.parse(dogsLS);
    }

    dogs.push(form.value);
    form.reset();
    localStorage.setItem("dogs", JSON.stringify(dogs));
  }
}





}
