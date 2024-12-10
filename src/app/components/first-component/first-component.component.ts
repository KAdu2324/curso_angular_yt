import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit{

    name: String ='Carlos';
    age: number = 12;
    job = 'analista';
    hobbies = ["Correr", "Jogar", "Ler"];
    car = {
      name: 'Polo',
      year: 2019,
    };

    constructor() {}
    ngOnInit(): void{

    }
}
