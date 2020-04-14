import { Injectable } from '@angular/core';
import { Personne } from '../models/Personne';


@Injectable({
  providedIn: 'root'
})
export class CvService {

  private personnes: Personne[];
  constructor() {

    this.personnes = [

      new Personne(1,'ben mohamed','ahmed',28,'expert.jpg',777777,'developer'),
      new Personne(2,"benounes","amine",30,"expert.jpg",99999,"expert"),
      new Personne(3,"test","test",20,"",111,"test")
    ]
  }

  getPersonne(): Personne[] {

    return  this.personnes;

  }

  addPersonne(personne: Personne): void{

    personne.id = this.personnes[this.personnes.length - 1].id + 1;
    this.personnes.push(personne);

  }

  findByName(name){


  }
}
