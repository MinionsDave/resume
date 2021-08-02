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
      points: 100
    },
    {
      name: 'Go',
      points: 85
    },
    {
      name: 'Nestjs',
      points: 100
    },
    {
      name: 'Angular',
      points: 100
    },
    {
      name: 'Mongodb',
      points: 90
    },
    {
      name: 'Mysql',
      points: 85
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}

interface Skill {
  name: string;
  points: number;
}
