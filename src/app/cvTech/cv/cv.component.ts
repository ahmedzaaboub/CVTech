import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/models/Personne';
import { CvService } from '../cv.service';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne[];
  selectedPersonne: Personne;
  constructor(
    private cvService: CvService
  ) { }

  ngOnInit(): void {
   // tslint:disable-next-line: no-unused-expression
   this.personnes = this.cvService.getPersonne();




  }

  selectPersonne(personne){

    this.selectedPersonne = personne;


  }

}
