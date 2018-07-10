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
      name: 'Mongodb',
      points: 90
    },
    // {
    //   name: '需求梳理',
    //   points: 90
    // },
    {
      name: 'Angular2+',
      points: 90
    },
    {
      name: 'angularjs',
      points: 85
    },
    {
      name: 'express',
      points: 100
    },
    {
      name: 'Koa',
      points: 80
    },
    {
      name: 'Nginx',
      points: 60
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
