import { Component, Input } from '@angular/core';
import { Developer } from '../models/developer';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {

   myPerson = new Developer ('Alicia', 'Critelli', 27,'femme', 'Belle comme une étoile', 
  [
    {name : 'Css',
  logo : 'logo Css',
site : 'www.css.com'},
    {name : 'html',
    logo : 'logo Html',
  site : 'www.html.com'}
  ]);

  constructor(){}

}
