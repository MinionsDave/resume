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
      name: 'html',
      points: 90
    },
    {
      name: 'css(sass)',
      points: 80
    },
    {
      name: 'Angular2(4)',
      points: 90
    },
    {
      name: 'angularjs',
      points: 85
    },
    {
      name: 'NodeJs',
      points: 80
    },
    {
      name: 'express',
      points: 85
    },
    {
      name: 'Koa',
      points: 80
    },
    {
      name: 'Mongodb',
      points: 70
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
