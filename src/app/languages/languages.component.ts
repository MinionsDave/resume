import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  skills: Skill[] = [
    {
      name: 'JavaScript',
      points: 100
    },
    {
      name: 'TypeScript',
      points: 100
    },
    {
      name: 'NodeJs',
      points: 80
    },
    {
      name: 'Angular2(4)',
      points: 90
    },
    {
      name: 'angularjs',
      points: 85
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

interface Skill {
  name: string;
  points: number;
}
